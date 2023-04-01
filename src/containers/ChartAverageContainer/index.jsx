import { useParams } from "react-router-dom"
import { useUserAverage } from "../../services/useUserAverage"
import Loader from "../../components/Loader"
import ChartAverage from "../../components/ChartAverage"

/**
 * A container component that fetches user average data and display an ChartAverage component.
 *
 * @returns {JSX.Element} - React component - The ChartAverage component with user average data.
 */

function ChartAverageContainer() {
  const { id } = useParams()

  const { formatedData, isDataLoading, error } = useUserAverage(id)
  // console.log(formatedData)

  if (isDataLoading) {
    return <Loader />
  }

  if (error) {
    return <div>Loading error!!</div>
  }

  const sessions = formatedData?.sessions
  //   console.log(sessions)

  // return ChartAverage only if sessions
  if (!sessions) {
    return <Loader />
  }

  return <ChartAverage sessions={sessions} />
}

export default ChartAverageContainer
