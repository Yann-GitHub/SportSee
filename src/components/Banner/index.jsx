import { useParams } from "react-router-dom"
import { useUserData } from "../../services/useUserData"
import Loader from "../Loader"

function Banner() {
  const { id } = useParams()
  console.log(typeof id)
  const { formatedData, isDataLoading, error } = useUserData(id)
  // console.log(formatedData)

  if (isDataLoading) {
    return <Loader />
  }

  if (error) {
    return <div>Loading error!!</div>
  }

  const firstName = formatedData?.userInfos?.firstName

  return (
    <div className="banner">
      <h1 className="banner__bonjour">
        Bonjour <span className="banner__firstname">{firstName}</span>
      </h1>
      <p className="banner__subtitle">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  )
}

export default Banner
