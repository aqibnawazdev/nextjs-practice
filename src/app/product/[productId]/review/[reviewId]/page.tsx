
const Reviews = ({ params }: {
  params: {
    reviewId: string,
    productId: string
  }
}) => {
  return (
    <h2>
      Review {params.reviewId} for product {params.productId}
    </h2>
  )
}

export default Reviews
