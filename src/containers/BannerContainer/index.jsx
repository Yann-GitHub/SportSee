import { useParams } from "react-router-dom"
import { useUserData } from "../../services/useUserData"
import Loader from "../../components/Loader"
import Banner from "../../components/Banner"

function BannerContainer() {
  const { id } = useParams()

  const { formatedData, isDataLoading, error } = useUserData(id)
  // console.log(formatedData)

  if (isDataLoading) {
    return <Loader />
  }

  if (error) {
    return <div>Loading error!!</div>
  }

  const firstName = formatedData?.userInfos?.firstName
  //   console.log(firstName)

  // return Banner only if firstName
  if (!firstName) {
    return <Loader />
  }

  return <Banner firstName={firstName} />
}

export default BannerContainer
