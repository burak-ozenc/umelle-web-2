import React, { useEffect, useRef, useState, memo } from 'react'

// Libraries
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { PropTypes } from "prop-types";

// Components
import Pagination from './HelperComponents/Pagination';
import Filter from "../Portfolio/Filter";

// Data
import { blogData } from './BlogData';

// Filter the blog data category wise
const blogClassicData = blogData.filter((item) => item.blogType === "classic");

const BlogClassic = (props) => {
  const blogWrapper = useRef();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    import("../../Functions/Utilities").then(module => {
      const grid = module.initializeIsotop(blogWrapper.current)
      grid.on('arrangeComplete', () => setLoading(false));
    })
  })

  const handleFilterChange = () => {
    blogWrapper.current.querySelectorAll("li").forEach(item => item.childNodes[0]?.classList.add("appear"))
  }

  return (
    <div className="grid-wrapper">
      {/* Filter Start */}
      <Filter title={props.title} filterData={props.filterData} onFilterChange={handleFilterChange} />
      {/* Filter End */}

      {/* Grid Start */}
      <ul ref={blogWrapper} className={`grid-container${props.grid ? ` ${props.grid}` : ""}${loading ? " loading" : ""}${props.filter === false ? "" : " mt-28 md:mt-[4.5rem] sm:mt-8"}`}>
        <li className="grid-sizer"></li>
        {
          props?.data?.map((item, i) => {
            return (
                <li key={i}
                    // style={{maxWidth:'400px', marginBottom:'2rem'}}
                    className={`m-auto grid-item${item?.double_col ? " grid-item-double" : ""} ${item.category.map(item => item.split(" ").join("")).toString().split(",").join(" ").toLowerCase()}`}>
                    <m.div className="blog-classic"
                           initial={{opacity: 0}}
                           whileInView={!loading && {opacity: 1}}
                           viewport={{once: true}}
                           transition={{duration: 0.6, ease: "easeOut"}}>
                        <div className="blog-post-image">
                            <Link aria-label="blog post image" to={`blog/blog-post/${[item?.id]}`}>
                                <img height="179" width="255" className="w-full" src={item?.img} alt="blog"                                />
                            </Link>
                        </div>
                        <Link aria-label="blog post title" style={{fontWeight:'bold'}} to={`blog-post/${[item?.id]}`}
                              className="blog-title">{item?.title}</Link>
                        <div className="post-details">
                            <p>{item?.description.substring(0, 50) + '...'}</p>
                            {/*<p>{item?.content}</p>*/}
                            {/*<p>{documentToReactComponents(item?.content)}</p>*/}
                        </div>
                    </m.div>
                </li>
            )
          })
        }
      </ul>
        {/* Grid End */}

        {/* Pagination Start */}
        {props.pagination === true && (
            <div className="flex justify-center mt-[7.5rem] md:mt-20">
          <Pagination />
        </div>)}
    </div>
  )
}

BlogClassic.defaultProps = {
  filter: false,
  data: blogClassicData,
  readMoreButton: "Continue reading",
  link: "/blog-types/blog-standard-post/"
}

BlogClassic.propTypes = {
  pagination: PropTypes.bool,
  title: PropTypes.string,
  grid: PropTypes.string,
  link: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      description: PropTypes.string,
      category: PropTypes.array,
      tags: PropTypes.array,
      blogType: PropTypes.string,
      img: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.object,
      content2: PropTypes.object,
      quote: PropTypes.string, 
      quoteImage: PropTypes.string,
      author: PropTypes.string,
      likes: PropTypes.number,
      comments: PropTypes.number,
      date: PropTypes.string,
      double_col: PropTypes.bool
    })
  ),
};

export default memo(BlogClassic)