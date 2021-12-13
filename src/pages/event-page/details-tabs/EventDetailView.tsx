import React, { useEffect, useState, useCallback } from 'react';
import { Row, Col, Card, CardHeader, CardTitle, CardBody,  } from 'reactstrap';
import { callApi } from '../../../utils';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { State } from "../../../redux/index";

interface useParamTypes {
    id: string;
  }

  interface eventType {
    name: string;
    description: string;
  }

const EventDetailView = (props: any) => {
  const { id } = useParams<useParamTypes>();
  const [loading, setLoading] = useState(false);
  const [event, setEvent] = useState<eventType>();

//   Get token from state
const token = useSelector((state: State) => state.auth.token);

  useEffect(()=>{
    fetchDepartments();
  },[]);

  const fetchDepartments = useCallback(async () => {
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
      },[id]);

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
                <CardTitle className="mt-0">Event</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="d-flex mb-3 justify-content-between">
                  <div>
                    <span className="text-secondary">Name:</span>
                  </div>
                  <span>
                    <span>
                      <strong>{event ? event.name : ''}</strong>
                    </span>
                  </span>
                </div>
                <div className="d-flex mb-3 justify-content-between">
                  <div>
                    <span className="text-secondary">InCharge</span>
                  </div>
                  {/* <div> {department.inCharge ? department.inCharge : 'No leader yet'} </div> */}
                </div>
                
              </CardBody>
            </Card>
          </Col>
        </Row>
      )}
      <Row>
        <Col sm="12">
          {/* <VerificationAsset
            // {...props}
            assets={verification.assets}
            facility={verification.facility}
          /> */}
        </Col>
      </Row>
    </div>
  );
}

export default EventDetailView;