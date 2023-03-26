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
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Label,
  Line,
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

  // const kind = formatedData?.kind
  // console.log(kind)

  const data = formatedData?.data
  // console.log(data)

  return (
    <div className="chartPerformance">
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="chartPerformance__responsive"
      >
        <RadarChart
          outerRadius={90}
          //   width={730}
          //   height={250}
          data={data}
          cx="50%"
          cy="50%"
        >
          <PolarGrid radialLines={false} gridType="polygon" />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            fill="white"
            // dy={3}
            tickLine={false}
            tick={{
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 150]}
            tick={false}
            axisLine={false}
          />
          <Radar
            // name="Mike"
            dataKey="value"
            // stroke="#8884d8"
            fill="red"
            fillOpacity={0.6}
          />
          {/* <Radar
            name="Lily"
            dataKey="B"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          /> */}
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartPerformance
