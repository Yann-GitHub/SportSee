import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import SideNav from "../../components/SideNav"

function SharedLayout() {
  return (
    // <>
    //   <Header />
    //   <Outlet />
    // </>
    <div className="sharedlayout">
      <Header />
      <div className="sharedwrapper">
        <SideNav />
        <Outlet />
      </div>
    </div>
  )
}

export default SharedLayout
