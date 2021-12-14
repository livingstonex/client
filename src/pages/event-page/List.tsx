import React, { useState, useEffect, ChangeEvent } from 'react';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { callApi, formatDate, } from '../../utils';
import { useSelector } from "react-redux";
import { State } from "../../redux/index";
import PaginationComponent from '../../components/utilities/Pagination';


const List = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [pages, setPages] = useState<number>(1);
  const [limit, setLimit] = useState<number>(5);
  const [search, setSearch] = useState<string>('');
  const [searchLoading, setSearchLoading] = useState<boolean>(false);

  useEffect(() => {
    fetechEvents();
    return () => {
      // cleanup
    }
  }, []);

  const token = useSelector((state:State) => state.auth.token);

  const fetechEvents = () => {
    const header = {
        headers: {
        Authorization: 'Bearer ' + token
      }
    };

    setLoading(true);

    callApi(`/events?page=${page}`, header)
        .then((res: any) => {
            setLoading(false);
            const { pages } = res.meta;
            setPages(pages);
            setEvents(res.data);
            console.log('RESPONSE: ', res);
        })
        .catch((err) => {
            setLoading(false);
            console.log('ERROR: ', err);
            return toast.error(err.message);
        });
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const onSearch = () => {
    const header = {
        headers: {
        Authorization: 'Bearer ' + token
      }
    };

    if (!search) {
        fetechEvents(); 
    }

    setSearchLoading(true);

    callApi(`/search?q=${search}`, header)
    .then((res: any) => {
        setSearchLoading(false);
        setEvents(res);
        console.log('RESPONSE: ', res);
    })
    .catch((err) => {
        setSearchLoading(false);
        console.log('ERROR: ', err);
        return toast.error(err.status);
    });
  }

  const onSetPage = (page: number) => {
      if (page) {
        setPage(page);
        fetechEvents();
      }
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-5">
            {/* <label className="lmb-5">Search:</label> */}
            <input
                placeholder={'Search...'}
                name='search'
                type='text'
                onChange={onChange}
                // value={event.name}
                disabled={loading}
                className="event-input ml-5"
                // width="70%"
                required
            />
            <button onClick={onSearch} className="btn btn-small sec mb-1 ml-5">Search { searchLoading && <i className='fas fa-spinner fa-spin ml-5'></i> }</button>
            <br />
            <br />

          <table className="table table-hover">
            <thead className="text-white pri" 
            // style={{backgroundColor: 'darkcyan'}}
            >
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">Name</th>
                <th scope="col">Start date</th>
                <th scope="col">End date</th>
                <th scope="col">View</th>
              </tr>
            </thead>
            <tbody>
              {
                loading && (
                  <tr>
                    <td colSpan={11} className="text-center">
                        <i className='fas fa-spinner fa-spin ml-5'></i> 
                    </td>
                  </tr>
                )

            }

            {
                events && events.map((event: any, i) => (
                  <tr key={i} >
                    <td>{loading ? 'x' : i + 1 + (page - 1) * limit}</td>
                    <td>{event.name}</td>
                    <td>{formatDate(event.start)}</td>
                    <td>{formatDate(event.end)}</td>
                    <td>
                      <Link to={{pathname: `/events/${event.id}` }} className="btn btn-small sec">View</Link>
                    </td>
                    {/* <td>
                      <button  className="btn btn-small btn-info" onClick={() => {}}>Update</button>
                    </td> */}
                  </tr>
                ))
            }

            {
                !events.length && (
                    <tr>
                    <td colSpan={11} className="text-center">
                        No events.
                    </td>
                    </tr>
                )
            }
                
                
              
            </tbody>
          </table>
          <PaginationComponent total={pages} page={page} onChange={onSetPage}/>
        </div>
      </div>
    </div>
  )
}

export default List
