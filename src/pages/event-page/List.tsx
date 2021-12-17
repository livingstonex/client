import React, { useState, useEffect, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { callApi, formatDate } from "../../utils";
import { useSelector } from "react-redux";
import { State } from "../../redux/index";
import PaginationComponent from "../../components/utilities/Pagination";
import Search from "../../components/utilities/Search";
import CustomTable from "../../components/utilities/CustomTable";

const List = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [pages, setPages] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [search, setSearch] = useState<string>("");
  const [searchLoading, setSearchLoading] = useState<boolean>(false);

  useEffect(() => {
    fetechEvents();
    return () => {
      // cleanup
    };
  }, []);

  const token = useSelector((state: State) => state.auth.token);

  const fetechEvents = () => {
    const header = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    setLoading(true);

    callApi(`/events?page=${page}`, header)
      .then((res: any) => {
        setLoading(false);
        const { pages } = res.meta;
        setPages(pages);
        setEvents(res.data);
        console.log("RESPONSE: ", res);
      })
      .catch((err) => {
        setLoading(false);
        console.log("ERROR: ", err);
        return toast.error(err.message);
      });
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearch = () => {
    const header = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    if (!search) {
      fetechEvents();
    }

    setSearchLoading(true);

    callApi(`/events/search?q=${search}`, header)
      .then((res: any) => {
        setSearchLoading(false);
        setEvents(res);
        console.log("RESPONSE: ", res);
      })
      .catch((err) => {
        setSearchLoading(false);
        console.log("ERROR: ", err);
        return toast.error(err.status);
      });
  };

  const onSetPage = (page: number) => {
    if (page) {
      setPage(page - 1);
      fetechEvents();
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-5">
          <Search
            loading={searchLoading}
            name="search"
            onChange={onChange}
            placeholder="Search..."
            type="text"
            onSearch={onSearch}
          />
          <br />
          <br />
          <CustomTable
            events={events}
            loading={loading}
            limit={limit}
            page={page}
          />
          <PaginationComponent
            total={pages}
            page={page + 1}
            onChange={onSetPage}
          />
        </div>
      </div>
    </div>
  );
};

export default List;
