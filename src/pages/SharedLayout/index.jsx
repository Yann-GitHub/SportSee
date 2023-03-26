import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import SideNav from "../../components/SideNav"

function SharedLayout() {
  return (
    <div className="sharedlayout">
      <Header />
      <SideNav />
      <div className="sharedwrapper">
        {/* <SideNav /> */}
        <Outlet />
      </div>
    </div>
  )
}

export default SharedLayout
