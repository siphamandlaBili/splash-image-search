import { useGlobalContext } from "./Context";
import { isError, useQuery } from "react-query";
import axios from "axios";


const Gallery = () => {

    const { data, mutable, isLoading, isError } = useQuery({
        queryKey: ['getSplash'],
        queryFn: () => axios.get(`https://api.unsplash.com/search/photos?client_id=2HzWTLhcc5prDp959kJ9dOqS9tNrStbFCLxG4-DgY7I&query=south africa`)
    })

    if (isLoading) {
        return <section className="image-container">
            <h4>loading ...</h4>
        </section>
    }
    if (isError) {
        return <section className="image-container">
            <h4>error loading data ...</h4>
        </section>

    }
    if (data?.data.total === 0) {
        return <section className="image-container">
            <h4>eno results found ...</h4>
        </section>

    }

    return <section className="image-container">{data?.data.results.map((urls, index) => {
        return <img className="img" src={urls.urls.full} alt="pic"  />
    })}</section>
}

export default Gallery;