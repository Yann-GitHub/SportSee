import PropTypes from "prop-types"

import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"

/**
 * The value per activity object.
 *
 * @typedef {Object} ActivityValue
 * @property {number} value - The value recorded for a specific activity.
 * @property {number} kind - The number corresponding to a specific activity.
 */

/**
 * Component that displays a chart of value per activity.
 *
 * @param {Object} props - The props object.
 * @param {ActivityValue[]} props.reverdData - An array of objects representing the recorded value per activity.
 * @returns {JSX.Element} - React Component - Activities's values chart.
 */

function ChartPerformance({ reversedData }) {
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

ChartPerformance.propTypes = {
  reversedData: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      kind: PropTypes.string,
    })
  ).isRequired,
}

export default ChartPerformance
