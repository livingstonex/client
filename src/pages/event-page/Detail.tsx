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
import { Route, Switch } from 'react-router-dom';
import classnames from 'classnames';
import EventDetailView from './details-tabs/EventDetailView';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { State } from "../../redux/index";

interface useParamTypes {
    id: string;
}

const Details: React.FC = (props: any) => {
  const { history, match, location } = props;
  const { id: eventId } = useParams<useParamTypes>();
  const userId = useSelector((state: State) => state.auth.user);

  const [loading, setLoading] = useState<boolean>(false);

  const registerForEvent = () => {
    console.log('EVENT ID ', eventId);
    console.log('User ID ', userId);
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
                        color="success"
                        className='mt-2'
                        onClick={registerForEvent}
                        disabled={loading}
                      >
                        Attend
                        { 
                         loading ? <span className="fas fa-spinner fa-spin ml-3"></span> : ''
                        }
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
                        href="#"
                        className={classnames({
                          active: location.pathname === `${match.url}`,
                        })}
                        onClick={() => {
                          history.push(`${match.url}`);
                        }}
                      >
                        Event
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ color: 'black' }}
                        href="#"
                        className={classnames({
                          active: location.pathname === `${match.url}/attendees`,
                        })}
                        onClick={() => {
                          history.push(`${match.url}/teams`);
                        }}
                      >
                        Attendees
                      </NavLink>
                    </NavItem>
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
                        exact
                        path={`${match.path}/attendees`}
                        render={(props) => (
                          <AttendeesView
                            {...props}
                          />
                        )}
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
