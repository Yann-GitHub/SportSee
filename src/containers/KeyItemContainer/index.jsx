import { useParams } from "react-router-dom"
import { useUserData } from "../../services/useUserData"
import IconProteine from "../../assets/icon-proteines.svg"
import IconLipide from "../../assets/icon-lipides.svg"
import IconGlucide from "../../assets/icon-glucides.svg"
import IconCalorie from "../../assets/icon-calories.svg"
import KeyItem from "../../components/KeyItem"
import Loader from "../../components/Loader"

function KeyItemContainer() {
  const { id } = useParams()

  const { formatedData, isDataLoading, error } = useUserData(id)
  // console.log(formatedData)

  if (isDataLoading) {
    return <Loader />
  }

  if (error) {
    return <div>Loading error!!</div>
  }

  const keyData = formatedData?.keyData
  // console.log(keyData)

  const calories = keyData?.calorieCount
  const proteines = keyData?.proteinCount
  const glucides = keyData?.carbohydrateCount
  const lipides = keyData?.lipidCount

  // return KeyItem only if all data
  if (!calories || !proteines || !glucides || !lipides) {
    return <Loader />
  }

  return (
    <div className="keyWrapper">
      <KeyItem
        category="Calories"
        value={calories}
        unit="kCal"
        color="red"
        icon={IconCalorie}
      />
      <KeyItem
        category="Proteines"
        value={proteines}
        unit="g"
        color="blue"
        icon={IconProteine}
      />
      <KeyItem
        category="Glucides"
        value={glucides}
        unit="g"
        color="yellow"
        icon={IconGlucide}
      />
      <KeyItem
        category="Lipides"
        value={lipides}
        unit="g"
        color="pink"
        icon={IconLipide}
      />
    </div>
  )
}

export default KeyItemContainer
