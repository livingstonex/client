import React from 'react';
const EventList = React.lazy(() => import("../pages/event-page/List"));
const EventDetail = React.lazy(() => import("../pages/event-page/Detail"));
const EventAttendees = React.lazy(() => import("../pages/event-page/UsersAttendingEvent"));


const main_routes = [
    { path: "/events", exact: true, component: EventList },
    { path: "/events/:id", exact: true, component: EventDetail },
    { path: "/events/:id/attendees", exact: true, component: EventAttendees },
  ];

export default main_routes;