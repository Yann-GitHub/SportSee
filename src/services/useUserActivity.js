import { useFetch } from "./useFetch"
import { UserActivity } from "../models/UserActivity"

/**
 * Custom hook that fetches user activity data and formats it into a UserActivity model (class).
 *
 * @param {string} userId - The ID of the user whose activity is being fetched.
 * @returns {{
 *   formatedData: UserActivity,
 *   isDataLoading: boolean,
 *   error: Error
 * }} - An object containing the formatted user activity data, a boolean indicating if the data is currently being loaded, and an error (if any).
 */

export function useUserActivity(userId) {
  let url = `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_USER_ENDPOINT}${userId}${process.env.REACT_APP_ACTIVITY_ENDPOINT}`
  // let url = `http://localhost:3000/user/${userId}`
  if (userId === "22" || userId === "28") {
    // url = `/data/${userId}/mockUserData.json`
    url = `${process.env.PUBLIC_URL}/data/${userId}/mockUserActivityData.json`
  }

  // console.log(url)
  const { data, isDataLoading, error } = useFetch(url)
  const formatedData = new UserActivity(data)

  return { formatedData, isDataLoading, error }
}
