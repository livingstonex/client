import React from 'react';
const HomePage = React.lazy(() => import("../pages/home-page/index"));


const main_routes = [
    { path: "/", exact: true, component: HomePage },
  ];

export default main_routes;