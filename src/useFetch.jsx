import { useState, useEffect } from "react"

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    // let url = 'http://localhost:8000/blogs'

    useEffect(() => {
        setTimeout(() => {

        fetch(url).then(res => {
            if(!res.ok){
                throw Error('We could not fetch blogs at this time. This is on us, please retry again after few minutes')
            }
            return res.json();
                }).then(data =>{

                    setData(data)
                    setIsLoading(false)
                    
                }).catch(err =>{
                    setError(err.message)
                    setIsLoading(false)
                })

        }, 500)
    }, [url]);
    
    return { data, isLoading, error }
}
 
export default useFetch;