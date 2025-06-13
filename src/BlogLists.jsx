import { Link } from "react-router-dom";
import BlogCard from "./components/BlogCard";

const BlogList = ({blogs, headerTiltle, headeDescription, moreBtn}) => {
    
    

    return ( 
        <div className="blog-list">
            <div className='blogheader'>
                <h1 className='title'> { headerTiltle } </h1>
                <span className='caption'> { headeDescription } </span>
            </div>

            <div className="blog-cards">
                
                {blogs.map((data) => (
                   <Link to={`/blog/${data.id}`}>                   
                        <BlogCard
                        cardImage={ data.blogImg }
                        key={data.id}
                        captionOne={ data.caption1 }
                        captionTwo={ data.caption2 }
                        cardTitle={ data.title }
                        date={ data.date }
                        /> 
                    </Link>  
                ))}             
            </div>

            <div className="more-btn-wrapper"> {moreBtn} </div>
        </div>
     );
}
 
export default BlogList;