import PropTypes from "prop-types"

import { ResponsiveContainer, RadialBarChart, RadialBar } from "recharts"

function ChartScore({ todayScore }) {
  // console.log(todayScore)

  const data = [
    { name: "innerFullCircle", value: 100, fill: "#FBFBFB" },
    { name: "outerScoreCircle", value: todayScore, fill: "red" },
  ]

  return (
    <div className="chartScore">
      <h2 className="chartScore__title">Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="35%"
          outerRadius="100%"
          startAngle={90}
          endAngle={450}
          barSize={10}
          data={data}
        >
          <RadialBar
            // minAngle={155}
            background={{ fill: "white" }}
            dataKey="value"
            // max={100}
            cornerRadius="50%"
          />
          <text
            x="50%"
            y="45%"
            textAnchor="middle"
            fontSize="26"
            fontWeight="500"
            fill="black"
          >
            {todayScore}%
          </text>
          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            fontSize="16"
            fontWeight="400"
            fill={"#74798C"}
          >
            de votre
          </text>
          <text
            x="50%"
            y="65%"
            textAnchor="middle"
            fontSize="16"
            fontWeight="400"
            fill={"#74798C"}
          >
            objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

ChartScore.propTypes = {
  todayScore: PropTypes.number.isRequired,
}

export default ChartScore
