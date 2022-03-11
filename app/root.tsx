import { Outlet } from "@remix-run/react";
import { LiveReload } from "remix";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
      </head>
      <body>
        <Outlet />
        <LiveReload /> {/* Useful for development */}
      </body>
    </html>
  );
}
