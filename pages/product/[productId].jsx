import { useRouter } from 'next/router'

const ProductDetail = () => {

  const router = useRouter()
  const productId = router.query.productId

  return  (
  <div>
    <h1>{productId}</h1>
  </div>
  )
}

export default ProductDetail