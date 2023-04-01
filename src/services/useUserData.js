import { useFetch } from "./useFetch"
import { UserData } from "../models/UserData"

/**
 * Custom hook that fetches user data and formats it into a UserData model (class).
 *
 * @param {string} userId - The ID of the user whose average is being fetched.
 * @returns {{
 *   formatedData: UserData,
 *   isDataLoading: boolean,
 *   error: Error
 * }} - An object containing the formatted user data, a boolean indicating if the data is currently being loaded, and an error (if any).
 */

export function useUserData(userId) {
  let url = `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_USER_ENDPOINT}${userId}`
  // let url = `http://localhost:3000/user/${userId}`
  if (userId === "22" || userId === "28") {
    // url = `/data/${userId}/mockUserData.json`
    url = `${process.env.PUBLIC_URL}/data/${userId}/mockUserData.json`
  }

  // console.log(url)
  const { data, isDataLoading, error } = useFetch(url)
  const formatedData = new UserData(data)

  return { formatedData, isDataLoading, error }
}
