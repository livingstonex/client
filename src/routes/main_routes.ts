import React from 'react';
const HomePage = React.lazy(() => import("../pages/home-page/index"));
const SignInPage = React.lazy(() => import("../pages/signin-page/index"));
const SignUpPage = React.lazy(() => import("../pages/signup-page/index"));


const main_routes = [
    // { path: "/", exact: true, component: HomePage },
    { path: "/login", exact: true, component: SignInPage },
    { path: "/register", exact: true, component: SignUpPage },
  ];

export default main_routes;