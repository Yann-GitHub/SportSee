import { useParams } from "react-router-dom"
import { useUserPerformance } from "../../services/useUserPerformance"
import Loader from "../Loader"
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"

function ChartPerformance() {
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

  return (
    <div className="chartPerformance">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={90} data={reversedData} cx="50%" cy="50%">
          <PolarGrid radialLines={false} gridType="polygon" />
          <PolarAngleAxis
            dataKey="kind"
            dy={3}
            tickLine={false}
            tick={{
              fontSize: 10,
              fontWeight: 500,
              fill: "white",
            }}
          />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar
            dataKey="value"
            fill="red"
            fillOpacity={0.6}
            legendType="none"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartPerformance
