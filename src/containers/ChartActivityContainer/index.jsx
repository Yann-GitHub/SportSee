import { useParams } from "react-router-dom"
import { useUserActivity } from "../../services/useUserActivity"
import Loader from "../../components/Loader"
import ChartActivity from "../../components/ChartActivity"

/**
 * Container component that fetches user activity data and display a ChartActivity component.
 *
 * @returns {JSX.Element} - React component - The ChartActivity component with user activity data.
 */

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

  // return ChartActivity only if sessions
  if (!sessions) {
    return <Loader />
  }

  return <ChartActivity sessions={sessions} />
}

export default ChartActivityContainer
