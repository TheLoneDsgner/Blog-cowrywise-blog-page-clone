const BlogCard = ({ cardImage, cardTitle, date, captionOne, captionTwo }) => {

    return ( 
        <>
        <div className="card">

            <div className="card-img-container">
                <img className="card-img" src={cardImage} alt="card image" />
            </div>

            <div className="card-content-wrapper">
                <div className="card-captions">
                    <span className="card-caption"> {captionOne} </span>
                    <span className="card-caption"> {captionTwo} </span>
                </div>

                <h2 className="card-title">
                    {cardTitle}
                </h2>
                <p className="publish-date"> {date} </p>
            </div>
        </div>
        </>
     );
}
 
export default BlogCard;