import { useParams } from "react-router-dom"
import { useUserPerformance } from "../../services/useUserPerformance"
import Loader from "../../components/Loader"
import ChartPerformance from "../../components/ChartPerformance"

function ChartPerformanceContainer() {
  const { id } = useParams()

  const { formatedData, isDataLoading, error } = useUserPerformance(id)
  // console.log(formatedData)

  if (isDataLoading) {
    return <Loader />
  }

  if (error) {
    return <div>Loading error!!</div>
  }

  const reversedData = formatedData?.data?.reverse()
  // console.log(reversedData)

  return <ChartPerformance reversedData={reversedData} />
}

export default ChartPerformanceContainer
