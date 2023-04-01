import { useParams } from "react-router-dom"
import { useUserData } from "../../services/useUserData"
import Loader from "../../components/Loader"
import ChartScore from "../../components/ChartScore"

/**
 * A container component that fetches user data and display a ChartScore component.
 *
 * @returns {JSX.Element} - React component - The ChartScore component with user data.
 */

function ChartScoreContainer() {
  const { id } = useParams()

  const { formatedData, isDataLoading, error } = useUserData(id)
  // console.log(formatedData)

  if (isDataLoading) {
    return <Loader />
  }

  if (error) {
    return <div>Loading error!!</div>
  }

  const todayScore = formatedData?.todayScore
  // console.log(todayScore)

  // return ChartScore only if todayScore
  if (!todayScore) {
    return <Loader />
  }

  return <ChartScore todayScore={todayScore} />
}

export default ChartScoreContainer
