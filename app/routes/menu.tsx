import { Outlet } from "@remix-run/react";

import NavBar from "~/components/NavBar";

const Menu = () => {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto my-4 md: my-12 px-4">
        <Outlet />
        {/* {children} */}
      </div>
    </div>
  );
}

export default Menu