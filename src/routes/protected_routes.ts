import React from 'react';
const EventList = React.lazy(() => import("../pages/event-page/List"));
const EventDetail = React.lazy(() => import("../pages/event-page/Detail"));
const EventAttendeesPage = React.lazy(() => import("../pages/event-page/UsersAttendingEvent"));
const CreateEventPage = React.lazy(() => import("../pages/event-page/CreateEvent"));


const main_routes = [
    { path: "/events", exact: true, component: EventList },
    { path: "/events/:id", exact: true, component: EventDetail },
    { path: "/events/:id/attendees", exact: true, component: EventAttendeesPage },
    { path: "/events/create/new", exact: true, component: CreateEventPage },
  ];

export default main_routes;