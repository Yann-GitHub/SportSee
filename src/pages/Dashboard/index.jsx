import { useParams, Navigate } from "react-router-dom"
import BannerContainer from "../../containers/BannerContainer"
import ChartActivityContainer from "../../containers/ChartActivityContainer"
import ChartAverageContainer from "../../containers/ChartAverageContainer"
import ChartPerformanceContainer from "../../containers/ChartPerformanceContainer"
import ChartScoreContainer from "../../containers/ChartScoreContainer"
import KeyItemContainer from "../../containers/KeyItemContainer"

/**
 * Component representing the dashboard page.
 *
 * @returns {JSX.Element} - The rendered dashboard page.
 */

function Dashboard() {
  const { id } = useParams()

  // Redirects to the error page if the ID is not valid.
  if (id !== "12" && id !== "18" && id !== "22" && id !== "28") {
    return <Navigate to="/error" />
  }

  return (
    <div className="dashboard-content">
      <BannerContainer />
      <div className="dashboard-content__chartsWrapper">
        <div className="dashboard-content__chartsWrapperLeft">
          <div className="dashboard-content__wrapperLeftTop">
            <ChartActivityContainer />
          </div>
          <div className="dashboard-content__wrapperLeftBottom">
            <ChartAverageContainer />
            <ChartPerformanceContainer />
            <ChartScoreContainer />
          </div>
        </div>
        <div className="dashboard-content__chartsWrapperRight">
          <KeyItemContainer />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
