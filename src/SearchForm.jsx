import { useGlobalContext } from "./Context";

const SearchForm = ()=>{
    
    const{setInput,input}=useGlobalContext();
    

    const handleSub = (e)=>{
       e.preventDefault();
       setInput(e.target.elements.search.value)
       console.log(e.target.elements.search.value)
    }

    
    return <section >
           <h1 className="title">Unsplash Images</h1>
           <form  className="search-form" onSubmit={handleSub}>
        <input type="text" name="search" className="search-input form-input" placeholder="cat" />
        <button type="submit" className="btn">search</button>
    </form>
    </section>
    
    
}

export default SearchForm;