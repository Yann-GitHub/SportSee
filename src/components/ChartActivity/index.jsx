import { useParams } from "react-router-dom"
import { useUserActivity } from "../../services/useUserActivity"
import Loader from "../Loader"
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Label,
  Bar,
} from "recharts"

function ChartActivity() {
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

  return (
    <div className="chartActivity">
      {/* <p className="chartActivity__title">Activité quotidienne</p> */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          //   width={500}
          //   height={300}
          data={sessions}
          barGap={8}
          barSize="10%"
          margin={{
            top: 0,
            right: 15,
            left: 0,
            bottom: 22,
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis
            tick={{ fill: "#9B9EAC", fontSize: 14, fontWeight: 500 }}
            stroke="#DEDEDE"
            dataKey={"dayNumber"}
            tickSize={16}
            tickLine={false}
            axisLine={true}
            domain={["dataMin", "dataMax"]}
            // tickMargin={30}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            orientation="right"
            dataKey="kilogram"
            interval={"preserveStartEnd"}
            yAxisId={1}
            domain={["dataMin - 10", "dataMax + 10"]}
            tick={{ fontSize: 14, fontWeight: 500 }}
            stroke="#9B9EAC"
            width={35}
          />
          <YAxis
            hide={true}
            yAxisId={2}
            dataKey="calories"
            domain={["dataMin - 15", "dataMax + 15"]}
          />
          <Tooltip />
          <Legend
            formatter={(value, entry, index) => (
              <span className="chartActivity__legend">{value}</span>
            )}
            height={70}
            verticalAlign="top"
            align="right"
            iconSize={9}
            iconType={"circle"}
            className="chartActivity__legend"
          />
          <Bar
            barSize={7}
            dataKey="kilogram"
            name="Poids (kg)"
            radius={[3, 3, 0, 0]}
            yAxisId={1}
            fill="#282D30"
            // className="chartActivity__bar-kg"
          />
          <Bar
            barSize={7}
            dataKey="calories"
            name="Calories brûlées (kCal)"
            radius={[3, 3, 0, 0]}
            yAxisId={2}
            fill="#FF0101"
            // className="chartActivity__bar-cal"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartActivity
