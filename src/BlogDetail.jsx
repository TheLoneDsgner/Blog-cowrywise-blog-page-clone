import './BlogDetails.css'
import facebook from './assets/icons/facebook_fill.svg'
import x from './assets/icons/twitter_fill.svg'
import linkedin from './assets/icons/linkedin_fill.svg'
import pinterest from './assets/icons/pinterest_fill.svg'

import { useParams } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetail = () => {
    const { id } = useParams()

    const { data, isLoading, error} = useFetch('http://localhost:8000/blogs/' + id);

    return ( 
        <div className='blog-detail'>
            {isLoading && <div className='loader'>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <article className='blog-detail-container'>
                    <div className="blog-detail-header-wrapper">
                        <div className="captions">
                            <span className='caption'> {data.caption1} </span>
                            <span className='caption'> {data.caption2} </span>
                        </div>

                        <h1 className='blog-title'> { data.title } </h1>

                        <div className="publish-dates">
                            <span className='publish-date'>{data.date}</span>
                            <div className='circule-divider'></div>
                            <span className='updated-date'> {data.update} </span>
                        </div>

                        <div className="social-icon-wrapper">
                            <a href="#"><img src={facebook} alt="facebook" /></a>
                            <a href="#"><img src={x} alt="X" /></a>
                            <a href="#"><img src={linkedin} alt="linkedin" /></a>
                            <a href="#"><img src={pinterest} alt="pinterest" /></a>
                        </div>
                    </div>

                <div className="img-wrapper">
                    <img src={data.blogImg} alt="blog cover image" />
                </div>

                
                </article>

            )}
        </div>
     );
}
 
export default BlogDetail;