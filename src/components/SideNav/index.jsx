import IconCycling from "../../assets/icon-cycling.svg"
import IconWorkout from "../../assets/icon-workout.svg"
import IconYoga from "../../assets/icon-yoga.svg"
import IconSwimming from "../../assets/icon-swimming.svg"

/**
 * Component that displays the side navigation menu.
 *
 * @returns {JSX.Element} - React component - SideNav.
 */

function SideNav() {
  return (
    <div className="sidenav">
      <div className="sidenav__icons">
        <div className="sidenav__icon">
          <img src={IconYoga} alt="yoga" />
        </div>
        <div className="sidenav__icon">
          <img src={IconSwimming} alt="swimming" />
        </div>
        <div className="sidenav__icon">
          <img src={IconCycling} alt="cycling" />
        </div>
        <div className="sidenav__icon">
          <img src={IconWorkout} alt="workout" />
        </div>
      </div>
      <small className="sidenav__copyright">Copyright, Sportsee 2020</small>
    </div>
  )
}

export default SideNav
