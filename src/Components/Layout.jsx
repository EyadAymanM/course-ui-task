import { Outlet, useLocation } from "react-router-dom"
import Nav from "./Nav"

function Layout() {
  const { pathname } = useLocation()
  
  return (
    <>
      <div>
        {pathname !== '/login' && <Nav />}
        <Outlet />
      </div>
    </>
  )
}
export default Layout