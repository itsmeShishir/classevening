import CardComponent from "../Component/CardComponent"

function BlogPage() {
  return (
    <>
    <section className="py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">Our latest  blog</h2>
          <div className="flex justify-center  gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
             <CardComponent img="https://pagedone.io/asset/uploads/1696244317.png" title="Clever ways to invest in product to organize your portfolio" />
             <CardComponent img="https://pagedone.io/asset/uploads/1696244340.png" title="How to grow your profit through systematic investment with us" />
             <CardComponent img="https://pagedone.io/asset/uploads/1696244356.png" title="How to analyze every holdings of your portfolio" />
          </div>
        </div>
    </section>
                                            
    </>
  )
}

export default BlogPage