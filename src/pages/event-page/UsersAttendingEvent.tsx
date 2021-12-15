import React, { useEffect, useState, useCallback } from 'react';
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Button,  } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { callApi, formatDate } from '../../utils';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { State } from "../../redux/index";
import axios from 'axios';

interface useParamTypes {
    id: string;
  }

  interface eventType {
    name: string;
    description: string;
    start: string;
    end: string;
    image: string;
    attendees: any[];
  }

const AttendeeDetailView = (props: any) => {
  const { id } = useParams<useParamTypes>();
  const [loading, setLoading] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
  const [event, setEvent] = useState<eventType>();
  let history = useHistory();

//   Get token, userId from state
const token = useSelector((state: State) => state.auth.token);
const userId = useSelector((state: State) => state.auth.user);

// get event_id from the params
const { id: eventId } = useParams<useParamTypes>();

  useEffect(()=>{
      console.log('ATEENDEEE')
    fetchEvent();
  },[]);

  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(20);

  const fetchEvent = useCallback(async () => {
        setLoading(true);

        const header = {
            headers: {
            Authorization: 'Bearer ' + token
          }
        };

        callApi(`/events/${id}`, header)
            .then((res: any) => {
                setLoading(false);
                console.log('RES ',res)
                setEvent(res);
            })
            .catch((err) => {
                setLoading(false);
                return toast.error(err.message);
            })
      },[id, token]);

      const goBack = () => {
        history.goBack()
      }

  const registerForEvent = () => {
        if (!eventId || !userId) {
            return toast.warn("Invalid user or event");
        }
    
        setLoading(true);
    
        const payload = {
            "event_id": eventId,
            "user_id": userId
        }
    
        const headers = {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        };   
        
        axios.post("http://localhost:4000/api/v1/registrations", payload, { headers: headers }).then((res) => {
                console.log("Registration Response: ", res);
                setLoading(false);
                return toast.success("Event registered for successfully.");
            })
            .catch((err) => {
                console.log("Create ERRRROOORRR: ", err);
                setLoading(false);
                return toast.error(err)
            });
      }

  return (
    <div>
        <Row className='d-flex justify-content-center mt-5 mx-2'>
          <Col sm="6">
            {/* <Col> */}
            <Card className="card-chart">
              <CardHeader>
                <CardTitle className="mt-0">
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='mt-3'>{ event ? event.name : 'Event' }</p>
                   
                   <div className='d-flex align-items-center'>
                     <button className='text-btn mt-2' onClick={goBack}>
                        <i className='fa fa-angle-left'></i> back
                     </button>
                      <Button
                          color="success"
                          className='mt-2'
                          onClick={registerForEvent}
                          disabled={registerLoading}
                        >
                          Attend
                          { 
                          registerLoading ? <span className="fas fa-spinner fa-spin ml-3"></span> : ''
                          }
                        </Button>
                      </div>
                  </div>
                  </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="d-flex mb-3 justify-content-center">
                  <table className="table table-hover">
                    <thead className="text-white" style={{backgroundColor: 'darkcyan'}}>
                      <tr>
                        <th scope="col">S/N</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Registered at</th>
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
                        event && event.attendees && event.attendees.map((user: any, i) => (
                          <tr key={i} >
                            <td>{loading ? 'x' : i + 1 + (page - 1) * limit}</td>
                            <td>{user.firstname + " " + user.lastname}</td>
                            <td>{user.email}</td>
                            <td>{formatDate(user.created_at)}</td>
                          </tr>
                        ))
                    }

                    {
                        event && !event.attendees.length && (
                            <tr>
                            <td colSpan={11} className="text-center">
                                No events.
                            </td>
                            </tr>
                        )
                    }
                        
                        
                      
                    </tbody>
                  </table>
                  {/* {loading ? (
                      <div  className="text-center">
                          <i className='fas fa-spinner fa-spin ml-5'></i>
                      </div>
                  ) 
                  : (event && event.users ? )} */}
                </div>
                
              </CardBody>
            </Card>
          </Col>
        </Row>
    </div>
  );
}

export default AttendeeDetailView;