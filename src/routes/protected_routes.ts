import React from 'react';
const EventList = React.lazy(() => import("../pages/event-page/List"));


const main_routes = [
    { path: "/events", exact: true, component: EventList },
  ];

export default main_routes;