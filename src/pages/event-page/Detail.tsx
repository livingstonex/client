import React, {useState} from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavLink,
  NavItem,
  Button,
} from 'reactstrap';
import { Link, Route, Switch } from 'react-router-dom';
import classnames from 'classnames';
import EventDetailView from './details-tabs/EventDetailView';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { State } from "../../redux/index";
import { callApi } from "../../utils";
import { toast } from 'react-toastify';

interface useParamTypes {
    id: string;
}

const Details: React.FC = (props: any) => {
  const { history, match, location } = props;
  const { id: eventId } = useParams<useParamTypes>();
  const userId = useSelector((state: State) => state.auth.user);
  const token = useSelector((state: State) => state.auth.token);

  const [loading, setLoading] = useState<boolean>(false);

  const registerForEvent = () => {
    if (!eventId || !userId) {
        return toast.warn("Invalid user or event");
    }

    setLoading(true);

    const header = {
        headers: {
        Authorization: 'Bearer ' + token
      }
    };

    callApi("/registrations", header)
        .then((res) => {
            setLoading(false);
            return toast.success("Registration successful.")
        })
        .catch((err) => {
            setLoading(false);
            return toast.error(err)
        });
  }


  return (
    <div className="content">
        <Row>
          <Col xs={12} md={12}>
            <Card>
              <CardHeader className="ml-2">
                <div className="d-flex justify-content-between align-contents-center">
                  <div>
                    <p className="category mt-3">Event Detail</p>
                  </div>
                  <div>
                      <Button
                        // color="success"
                        className='mt-2 tertiary'
                        onClick={() => registerForEvent()}
                        disabled={loading}
                      >
                        Attend
                        { 
                         loading ? <span className="fas fa-spinner fa-spin ml-3"></span> : ''
                        }
                      </Button>
                      <Button
                        // color="primary"
                        className='mt-2 ml-5 sec'
                        // onClick={}
                      >
                        {/* View Attendees */}
                        <Link to={`/events/${eventId}/attendees`} className='linker'>Attendees</Link>
                      </Button>
                      <Button
                        // color="primary"
                        className='mt-2 ml-5 pri'
                      >
                        <Link to={`/events/create/new`} className='linker'>Create Event</Link>
                      </Button>
                  </div>
                </div>
              </CardHeader>

              <CardBody>
                <div>
                  <Nav tabs>
                    <NavItem>
                      <NavLink
                        style={{ color: 'black' }}
                        // href="#"
                        className={classnames({
                          active: location.pathname === `${match.url}`,
                        })}
                        onClick={() => {
                          history.push(`/events/${eventId}`);
                        }}
                      >
                        Event
                      </NavLink>
                    </NavItem>
                    {/* <NavItem>
                      <NavLink
                        style={{ color: 'black' }}
                        href="#"
                        className={classnames({
                          active: location.pathname === `${match.url}/attendees`,
                        })}
                        onClick={() => {
                          history.push(`${match.url}/attendees`);
                        }}
                      >
                        Attendees
                      </NavLink>
                    </NavItem> */}
                  </Nav>
                  <br />
                  <div>
                    <Switch>
                      <Route
                        exact
                        path={`${match.path}`}
                        render={(props) => (
                          <EventDetailView
                            {...props}
                          />
                        )}
                      ></Route>

                       {/* <Route
                        exact={true}
                        path={`${match.path}/attendees`}
                        render={(props) => {
                            console.log('MATCH ', match.path)
                          return <AttendeeDetailView
                          {...props}
                        />
                        }}
                      ></Route> */}
                    </Switch>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
  )
}

export default Details