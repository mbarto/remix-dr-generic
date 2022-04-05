import { Outlet } from "@remix-run/react";

export default function Here() {
  return (
    <div>
      <h1>You are here!</h1>
      <div>
        <Outlet/>
      </div>
    </div>
  );
}
