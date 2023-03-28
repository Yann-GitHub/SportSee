import { useParams } from "react-router-dom"
import { useUserActivity } from "../../services/useUserActivity"
import Loader from "../../components/Loader"
import ChartActivity from "../../components/ChartActivity"

function ChartActivityContainer() {
  const { id } = useParams()

  const { formatedData, isDataLoading, error } = useUserActivity(id)
  // console.log(formatedData)

  if (isDataLoading) {
    return <Loader />
  }

  if (error) {
    return <div>Loading error!!</div>
  }

  const sessions = formatedData?.sessions
  //   console.log(sessions)

  return <ChartActivity sessions={sessions} />
}

export default ChartActivityContainer
