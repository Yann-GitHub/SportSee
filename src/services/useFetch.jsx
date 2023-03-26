import { useState, useEffect } from "react"

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
      }
      setisDataLoading(false)
    }
    fetchData()
  }, [url])
  return { isDataLoading, data, error }
}
