import { useParams } from "react-router-dom"
import { useUserAverage } from "../../services/useUserAverage"
import Loader from "../Loader"
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Label,
  Line,
} from "recharts"

function ChartAverage() {
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

  return (
    <div className="chartAverage">
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="chartAverage__responsive"
      >
        <LineChart
          // width={730}
          //   height={250}
          data={sessions}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <XAxis
            dataKey="day"
            // stroke="rgba(255, 255, 255, 0.6)"
            axisLine={false}
            tickLine={false}
            // tick={{ fill: "white" }}
            // domain={[0, 0]}
            interval={"preserveStartEnd"}
            padding={{ left: 30, right: 30 }}
            tick={{
              //   dx: window.innerWidth > 1340 ? 20 : 12,
              fill: "white",
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <YAxis
            dataKey="sessionLength"
            axisLine={false}
            tickLine={false}
            domain={["dataMin", "dataMax + 25"]}
            hide={true}
          />
          <Tooltip />
          {/* <Legend /> */}
          {/* <Line type="monotone" dataKey="day" stroke="#8884d8" /> */}
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              fill: "white",
              stroke: "rgba(255,255,255, 0.3)",
              strokeWidth: 10,
              r: 4,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartAverage
