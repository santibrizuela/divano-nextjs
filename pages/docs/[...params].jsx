import { useRouter } from 'next/router'

const Doc = () => {
    const router = useRouter()
    const { params = [] } = router.query
    console.log(params)

  return (
    <div>{params}</div>
  )
}

export default Doc