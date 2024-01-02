import React from 'react';
import { Outlet } from "react-router-dom";
import { NavigationManager } from "../components/NavigationManager";
import { PageA } from "../pages/PageA";
import { PageB } from "../pages/PageB";
import { PostShow } from '../pages/PostShow';

export const routes = [
  {
    path: "/",
    element: (
      <NavigationManager>
        <Outlet />
      </NavigationManager>
    ),
    children: [
      {
        index: true,
        element: <PageA />,
      },
      {
        path: "page-a",
        element: <PageA />,
      },
      {
        path: "page-b",
        element: <PageB />,
      },

      {
        path: "page-c",
        element: <PageB />,
      },

      {
        path: "page-show",
        element: <PostShow />,
      }
    ],
  },
];
