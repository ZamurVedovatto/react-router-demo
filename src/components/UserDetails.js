import { useParams } from 'react-router-dom'

export const UserDetails = () => {
  const { userId } = useParams()
  // const params = useParams()
  // const userId = params.userId

  return (
    <div>UserDetails {userId}</div>
  )
}
