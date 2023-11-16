import { FaSearch } from "react-icons/fa"
import './SearchBar.css'
import { useState } from "react"

const SearchBar = ({ setResults }) => {

    const [input, setInput] = useState("")

    const fetchData = (value)=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) =>{
            const result = json.filter((user) =>{
                return value && user && user.name && user.name.toLowerCase().includes(value)
            })
            setResults(result)
        })
    };

    const handleChange = (value) =>{
        setInput(value);
        fetchData(value);
    };

    return (
        <div className="input-wrapper">
            <FaSearch id="search-icons"/>
            <input type="text" 
            placeholder='Type to Search' 
            value={input} 
            onChange={(e)=>handleChange(e.target.value)}/>
        </div>
    )
}

export default SearchBar
