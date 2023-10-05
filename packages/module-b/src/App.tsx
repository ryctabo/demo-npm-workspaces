import { useEffect, useState } from "react"

export default function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => {
        console.log({ data })
        setMessage(data.message)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <h1>Hello from React.js</h1>
      <p>{message}</p>
    </>
  )
}
