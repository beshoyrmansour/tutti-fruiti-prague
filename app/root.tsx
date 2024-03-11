import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import type { LinksFunction } from "@vercel/remix";
import stylesheet from "~/styles/tailwind.css";
import fontsStylesheet from "~/styles/font.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: fontsStylesheet },

  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref },] : []),
];

export default function App() {
  return (
    <html lang="en" style={{ height: '100%', }}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{
        padding: 0,
        margin: 0, height: '100%',
      }}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Analytics />
      </body>
    </html>
  );
}
