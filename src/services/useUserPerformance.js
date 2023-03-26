import { useFetch } from "./useFetch"
import { UserPerformance } from "../models/UserPerformance"

export function useUserPerformance(userId) {
  let url = `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_USER_ENDPOINT}${userId}${process.env.REACT_APP_PERFORMANCE_ENDPOINT}`
  // let url = `http://localhost:3000/user/${userId}`
  if (userId === "22" || userId === "28") {
    // url = `/data/${userId}/mockUserData.json`
    url = `${process.env.PUBLIC_URL}/data/${userId}/mockUserPerformanceData.json`
  }

  // console.log(url)
  const { data, isDataLoading, error } = useFetch(url)
  const formatedData = new UserPerformance(data)

  return { formatedData, isDataLoading, error }
}
