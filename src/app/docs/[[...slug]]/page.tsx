
const Docs = ({ params }: {
  params: {
    slug: string[]
  }
}) => {

  if (params.slug?.length == 2) {
    return (
      <h2>
        Viewing docs for feature {params.slug[0]} and Concept {params.slug[1]}
      </h2>
    )
  } else if (params.slug?.length == 1) {
    return (
      <h2>
        Viewing docs for feature {params.slug[0]}
      </h2>
    )
  } else {
    return (
      <h2>
        Viewing docs home Page
      </h2>)
  }

}


export default Docs
