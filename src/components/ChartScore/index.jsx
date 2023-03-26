import { useParams } from "react-router-dom"
import { useUserData } from "../../services/useUserData"
import Loader from "../Loader"
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  Tooltip,
  Legend,
} from "recharts"

function ChartScore() {
  const { id } = useParams()

  const { formatedData, isDataLoading, error } = useUserData(id)
  // console.log(formatedData)

  if (isDataLoading) {
    return <Loader />
  }

  if (error) {
    return <div>Loading error!!</div>
  }

  const todayScore = formatedData?.todayScore
  // console.log(todayScore)

  const scoreValue = [{ value: todayScore * 100 }]
  const newScore = todayScore * 100

  return (
    <div className="chartScore">
      <ResponsiveContainer
        width="100%"
        height="100%"
        // className="chartScore__responsive"
      >
        <RadialBarChart
          data={scoreValue}
          innerRadius={80}
          barSize={10}
          startAngle={80}
          endAngle={440}
          fill={"#FF0000"}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar dataKey="value" cornerRadius={5} background />
          <text
            x="50%"
            y="45%"
            textAnchor="middle"
            fontSize="26"
            fontWeight="700"
            fill="black"
          >
            {newScore}%
          </text>
          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            fontSize="16"
            fill={"#74798C"}
            fontWeight="500"
          >
            de votre objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartScore
