import React from 'react';
const EventList = React.lazy(() => import("../pages/event-page/List"));
const EventDetail = React.lazy(() => import("../pages/event-page/Detail"));


const main_routes = [
    { path: "/events", exact: true, component: EventList },
    { path: "/events/:id", exact: true, component: EventDetail },
  ];

export default main_routes;