import propTypes from 'prop-types'

function CardComponent(props) {
  const {img, title, date, desc} = props;
  return (
    <>
            <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
              <div className="flex items-center">
                  <img src={img} alt="blogs tailwind section" className="rounded-t-2xl w-full object-cover" />
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                  <span className="text-indigo-600 font-medium mb-3 block">{date}</span>
                  <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">{title}</h4>
                  <p className="text-gray-500 leading-6 mb-10">{desc}</p>
                  <a href="javascript:;" className="cursor-pointer text-lg text-indigo-600 font-semibold">Read more..</a>
              </div>
             </div>
    </>
  )
}


// valibate props type
CardComponent.propTypes = {
    img: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    date: propTypes.string,
    desc: propTypes.string
}

CardComponent.defaultProps = {
    date : "Jan 01, 2023", 
    desc :"Discover smart investment strategies to streamline and organize your portfolio.."
}

export default CardComponent