import React, { useEffect, useState, useCallback } from 'react';
import { Row, Col, Card, CardHeader, CardTitle, CardBody,  } from 'reactstrap';
import { callApi, formatDate, formatTime } from '../../../utils';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { State } from "../../../redux/index";
import EventImg from "../../../assets/event_img.jpeg";

interface useParamTypes {
    id: string;
  }

  interface eventType {
    name: string;
    description: string;
    start: string;
    end: string;
    image: string;
  }

const EventDetailView = (props: any) => {
  const { id } = useParams<useParamTypes>();
  const [loading, setLoading] = useState(false);
  const [event, setEvent] = useState<eventType>();

//   Get token from state
const token = useSelector((state: State) => state.auth.token);

  useEffect(()=>{
    fetchEvent();
  },[]);

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

  return (
    <div>
      {loading ? (
                    <div  className="text-center">
                        <i className='fas fa-spinner fa-spin ml-5'></i>
                    </div>
                ) 
                : (
        <Row>
          <Col sm="6">
            {/* <Col> */}
            <Card className="card-chart">
              <CardHeader>
                <CardTitle className="mt-0">{ event ? event.name : 'Event' }</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="fill">
                  { event && event.image ? <img src={event.image} alt="event"/> : <img src={EventImg} alt="event"/>}
                </div>
                <div className="d-flex mb-3 justify-content-between">
                  <div>
                    <span className="text-secondary">Description:</span>
                  </div>
                  <span>
                    <span>
                      <strong>{event ? event.description : ''}</strong>
                    </span>
                  </span>
                </div>
                <div className="d-flex mb-3 justify-content-between">
                  <div>
                    <span className="text-secondary">Start Day:</span>
                  </div>
                  <div> {event ? formatDate(event.start) : ''} </div>
                </div>
                <div className="d-flex mb-3 justify-content-between">
                  <div>
                    <span className="text-secondary">End Day:</span>
                  </div>
                  <div> {event ? formatDate(event.end) : ''} </div>
                </div>
                <div className="d-flex mb-3 justify-content-between">
                  <div>
                    <span className="text-secondary">Start time:</span>
                  </div>
                  <div> {event ? formatTime(event.start) : ''} </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default EventDetailView;