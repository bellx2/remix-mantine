import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import type { ReactNode } from 'react';

import "./styles/mantine.css";

export const links = () => [];

export function Layout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <ColorSchemeScript />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App(): JSX.Element {
  return (
    <MantineProvider>
      <Outlet />
    </MantineProvider>
  );
}
