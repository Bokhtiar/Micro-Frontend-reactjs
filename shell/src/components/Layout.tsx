import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { app1RoutingPrefix, app2RoutingPrefix } from '../routing/constants';

export function Layout() {
  return (
    <>


      <div className='row'>
        <div className='col-sm-12 col-md-2 col-lg-2 list-group'>
          <Link className='list-group-item' to={`/${app1RoutingPrefix}/page-1`} style={{ marginRight: "1rem" }}>
            App1 Page1
          </Link> <br />
          <Link className='list-group-item' to={`/${app1RoutingPrefix}/page-2`} style={{ marginRight: "1rem" }}>
            App1 Page2
          </Link><br />
          {/* new link adeed */}
          <Link className='list-group-item' to={`/${app1RoutingPrefix}/page-3`} style={{ marginRight: "1rem" }}>
            App1 Page3
          </Link><br />


          <Link className='list-group-item' to={`/${app2RoutingPrefix}/page-a`} style={{ marginRight: "1rem" }}>
            App2 PageA
          </Link><br />
          <Link className='list-group-item' to={`/${app2RoutingPrefix}/page-b`} style={{ marginRight: "1rem" }}>
            App2 PageB
          </Link><br />
        </div>


        <div className='col-sm-12 col-md-10 col-lg-10'>
          <Outlet />
        </div>
      </div>
    </>
  );
}
