import { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import homeStyleUrl from "~/styles/home.css"

export const links: LinksFunction = () => ([{
  rel: "stylesheet",
  href: homeStyleUrl
}])

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Link to="here">Here</Link>
        </li>
        <li>
          <Link to="here/nested">Nested</Link>
        </li>
      </ul>
    </div>
  );
}
