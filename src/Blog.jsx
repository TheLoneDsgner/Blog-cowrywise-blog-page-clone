import BlogList from "./BlogLists";
import BtnTertiary from "./components/BtnTertiary";
import useFetch from "./useFetch";

const Blog = () => {

    const { data, isLoading, error} = useFetch('http://localhost:8000/blogs')
    

    return ( 

        <div className="blog">
            {error && <div> {error} </div>}
            { isLoading && <div className="loader">Loading...</div> } 

            {data && <BlogList
            headerTiltle={"New & Noteworthy"}
            headeDescription={"Latest money tips for you"}
            blogs={data}
            moreBtn={<BtnTertiary text={"View more"}/>}
            />}

            {data && <BlogList
            headerTiltle={"Money Stories"}
            blogs={data.filter((blogs) => blogs.caption1 === "Money Tips")}
            moreBtn={<BtnTertiary text={"View more"}/>}            
            />}

        </div>
      
     );
}
 
export default Blog;


{/* <div>
    [
        {blogImg: "", caption1: "Ope's Diary", title: "Ope Spoke About This: Black Tax Will Finish You If You Don’t Plan", date: "May 15, 2025", id: 1},

        {blogImg: "", caption1: "Money Tips", caption2: "Savings", title: "Ope Spoke About This: Black Tax Will Finish You If You Don’t Plan", date: "May 15, 2025", id: 2},

        {blogImg: "", caption1: "Money Tips", caption2: "Money Map", title: "Ope Spoke About This: Black Tax Will Finish You If You Don’t Plan", date: "May 15, 2025", id: 3},

        {blogImg: "", caption1: "Investing", caption2: "Money Tips", title: "Ope Spoke About This: Black Tax Will Finish You If You Don’t Plan", date: "May 15, 2025", id: 4} 
    ]
</div> */}