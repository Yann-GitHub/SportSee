import { useParams, Navigate } from "react-router-dom"
import BannerContainer from "../../containers/BannerContainer"
import ChartActivityContainer from "../../containers/ChartActivityContainer"
import ChartAverageContainer from "../../containers/ChartAverageContainer"
import ChartPerformanceContainer from "../../containers/ChartPerformanceContainer"
import ChartScoreContainer from "../../containers/ChartScoreContainer"
import KeyItemContainer from "../../containers/KeyItemContainer"
// import { useFetch } from "../../services/useFetch"
// import Loader from "../../components/Loader"
// import ErrorImg from "../../assets/server_down.svg"
// import { useEffect, useState } from "react"

function Dashboard() {
  const { id } = useParams()

  if (id !== "12" && id !== "18" && id !== "22" && id !== "28") {
    return <Navigate to="/error" />
  }

  // In case of API call from Dashboard page
  // const error = true
  // if (error) {
  //   return (
  //     <div className="dashboard-content__errorWrapper">
  //       <img
  //         src={ErrorImg}
  //         alt="erreur"
  //         className="dashboard-content__errorImg"
  //       />
  //       <span className="dashboard-content__errorTxt">
  //         Désolé, une erreur s'est produite. Veuillez réessayer plus tard.
  //       </span>
  //     </div>
  //   )
  // }

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
