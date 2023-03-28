import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts"

function ChartActivity({ sessions }) {
  // console.log(sessions)

  return (
    <div className="chartActivity">
      <h2 className="chartActivity__title">Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={sessions}
          barGap={8}
          barSize="10%"
          margin={{
            top: 22,
            right: 15,
            left: 0,
            bottom: 22,
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis
            axisLine={true}
            stroke="#DEDEDE"
            dataKey="dayNumber"
            tick={{ fill: "#9B9EAC", fontSize: 14, fontWeight: 500 }}
            tickSize={16}
            tickLine={false}
          />
          <YAxis
            axisLine={false}
            orientation="right"
            dataKey="kilogram"
            tick={{ fill: "#9B9EAC", fontSize: 14, fontWeight: 500 }}
            tickLine={false}
            domain={["dataMin - 10", "dataMax + 10"]}
            yAxisId={1}
          />
          <YAxis
            hide={true}
            dataKey="calories"
            yAxisId={2}
            domain={["dataMin - 15", "dataMax + 15"]}
          />
          <Tooltip
            itemStyle={{
              color: "white",
              fontSize: 9,
              fontWeight: 500,
            }}
            cursor={{
              fill: "rgba(196, 196, 196, 0.5)",
            }}
            labelStyle={{ display: "none" }}
            wrapperStyle={{ outlineStyle: "none" }}
            formatter={(value, name, unit) => [value, unit]}
            contentStyle={{
              backgroundColor: "#E60000",
            }}
          />
          <Legend
            height={70}
            verticalAlign="top"
            align="right"
            iconSize={9}
            iconType={"circle"}
            formatter={(value) => (
              <span className="chartActivity__legend">{value}</span>
            )}
            className="chartActivity__legend"
          />
          <Bar
            name="Poids (kg)"
            dataKey="kilogram"
            barSize={7}
            fill="#282D30"
            radius={[3, 3, 0, 0]}
            yAxisId={1}
            unit=" kg"
          />
          <Bar
            name="Calories brûlées (kCal)"
            dataKey="calories"
            barSize={7}
            fill="#FF0101"
            radius={[3, 3, 0, 0]}
            yAxisId={2}
            unit=" Kcal"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartActivity
