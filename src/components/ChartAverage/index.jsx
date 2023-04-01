import PropTypes from "prop-types"

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts"

/**
 * The daily time session object.
 *
 * @typedef {Object} Session
 * @property {number} day - The day number corresponding to the session.
 * @property {number} sessionLength - The length corresponding to the session.
 */

/**
 * Component that displays a chart of days and the length of the session.
 *
 * @param {Object} props - The props object.
 * @param {Session[]} props.sessions - An array of objects representing daily length sessions.
 * @returns {JSX.Element} - React component - Daily length session chart.
 */

function ChartAverage({ sessions }) {
  // console.log(sessions)

  const daysOfWeek = ["L ", "M ", "M ", "J ", "V ", "S ", "D "]

  return (
    <div className="chartAverage">
      <h2 className="chartAverage__title">Durée moyenne des sessions</h2>
      <div className="chartAverage__days-wrapper">
        {daysOfWeek.map((day, index) => (
          <div className="chartAverage__days-item" key={index}>
            {day}
          </div>
        ))}
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={sessions}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <XAxis hide={true} tickLine={false} axisLine={false} />
          <YAxis
            hide={true}
            axisLine={false}
            tickLine={false}
            domain={["dataMin-30", "dataMax+50"]}
          />
          <Tooltip
            cursor={{
              stroke: "black",
              strokeOpacity: 0.1,
              strokeWidth: 80,
              height: 263,
            }}
            wrapperStyle={{ outlineStyle: "none" }}
            labelStyle={{ display: "none" }}
            formatter={(value) => [value]}
            contentStyle={{
              backgroundColor: "#FBFBFB",
              padding: 5,
            }}
            itemStyle={{
              color: "black",
              fontSize: 9,
              fontWeight: 500,
            }}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            strokeOpacity="0.6"
            strokeWidth={2}
            dot={false}
            unit=" min"
            activeDot={{
              fill: "white",
              stroke: "rgba(255,255,255, 0.2)",
              strokeWidth: 10,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

ChartAverage.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      sessionLength: PropTypes.number,
    })
  ).isRequired,
}

export default ChartAverage
