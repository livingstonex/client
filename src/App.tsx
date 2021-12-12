import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/hoc/ProtectedRoute";
import './App.css';
import config from "./config";
import main_routes from "./routes/main_routes";
import protected_routes from "./routes/protected_routes";
import Loading from "./components/utilities/Loading";
import { ToastContainer, } from 'react-toastify';

function App() {
  const menu = main_routes.map((route, index) => {
    return (
      <Route
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    );
  });

  const guarded = protected_routes.map((route, index) => {
    return (
      <ProtectedRoute 
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    )
  })

  return (
    <div className='App'>
      <BrowserRouter basename={config.basePath}>
        <ToastContainer position='top-left' hideProgressBar={true} className="mt-5"/>

        <Switch>
          <Suspense fallback={<Loading />}>
            {menu}
            {guarded}
          </Suspense>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
