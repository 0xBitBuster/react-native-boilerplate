import { useEffect, useState } from "react"

const useFetch = (fn) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const refetch = () => fetchData();
  const fetchData = async() => {
    setIsLoading(true)

    try {
      const res = await fn()
      setData(res)
    } catch (err) {
      setError(err)
    }

    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { data, isLoading, error, refetch }
}

export default useFetch