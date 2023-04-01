import { useState, useEffect } from "react"

/**
 * Custom hook for fetching data from a given URL using the fetch API.
 *
 * @param {string} url - The URL to fetch the data from.
 * @returns {{
 * isDataLoading: boolean,
 * data: Object,
 * error: boolean
 * }} - An object containing the fetched data, a boolean indicating if the data is currently being loaded, and any error that occurred during the fetch operation.
 */

export function useFetch(url) {
  const [data, setData] = useState({})
  const [isDataLoading, setisDataLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) return
    setisDataLoading(true)
    async function fetchData() {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          const { errorMessage } = await response.json()
          throw new Error(errorMessage)
        } else {
          const data = await response.json()
          setData(data)
          // console.log(data)
        }
      } catch (err) {
        console.log(err.message)
        setError(err.message)
      } finally {
        setisDataLoading(false)
      }
    }
    fetchData()
  }, [url])
  return { isDataLoading, data, error }
}
