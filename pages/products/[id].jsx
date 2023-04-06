import {useRouter} from 'next/router'

const ProductDetail = () => {
  const router = useRouter()

  console.log(router.query)

  return (
  <div>
    <h1>id</h1>
  </div>
  )
}

export default ProductDetail