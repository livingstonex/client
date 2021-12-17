import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils";

interface IProps {
  loading: boolean;
  events: any[];
  page: number;
  limit: number;
}

const CustomTable: React.FC<IProps> = ({ loading, events, page, limit }) => {
  return (
    <>
      <table className="table table-hover">
        <thead className="text-white pri">
          <tr>
            <th scope="col">S/N</th>
            <th scope="col">Name</th>
            <th scope="col">Start date</th>
            <th scope="col">End date</th>
            <th scope="col">View</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan={11} className="text-center">
                <i className="fas fa-spinner fa-spin ml-5"></i>
              </td>
            </tr>
          )}

          {events &&
            events.map((event: any, i) => (
              <tr key={i}>
                <td>{loading ? "x" : i + 1 + page * limit}</td>
                <td>{event.name}</td>
                <td>{formatDate(event.start)}</td>
                <td>{formatDate(event.end)}</td>
                <td>
                  <Link
                    to={{ pathname: `/events/${event.id}` }}
                    className="btn btn-small sec"
                  >
                    View
                  </Link>
                </td>
                {/* <td>
                      <button  className="btn btn-small btn-info" onClick={() => {}}>Update</button>
                    </td> */}
              </tr>
            ))}

          {!events.length && (
            <tr>
              <td colSpan={11} className="text-center">
                No events.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default CustomTable;
