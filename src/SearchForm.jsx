import { useGlobalContext } from "./Context";

const SearchForm = ()=>{
    const{formOnsubmit,input,setInput}=useGlobalContext()
    return <section >
           <h1 className="title">Unsplash Images</h1>
           <form action="submit" className="search-form">
        <input type="text" name="search" className="search-input form-input" placeholder="cat" value={input} onChange={(e)=>{setInput(e.target.value), console.log(e.target.value)}} />
        <button type="submit" className="btn" onClick={formOnsubmit}>search</button>
    </form>
    </section>
    
    
}

export default SearchForm;