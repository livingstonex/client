import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { callApi, formatDate, } from '../../utils';
import { useSelector } from "react-redux";
import { State } from "../../redux/index";


const List = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(20);

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
    callApi('/events', header)
    .then((res: any) => {
        setLoading(false);
        setEvents(res);
        console.log('RESPONSE: ', res);
    })
    .catch((err) => {
        setLoading(false);
        console.log('ERROR: ', err);
        return toast.error(err.message);
    });
  }

  const view = async (id: string) => {
    window.open(`/departments/${id}`);
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-5">
          <table className="table table-hover">
            <thead className="text-white" style={{backgroundColor: 'darkcyan'}}>
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
                      {/* <button type="button" onClick={() => view(department._id)} className="btn btn-small btn-success">View</button> */}
                      <Link to={{pathname: `/events/${event.id}` }} className="btn btn-small btn-success">View</Link>
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
        </div>
      </div>
    </div>
  )
}

export default List
