import { Link } from "react-router-dom";
import BG from "../../public/images/BookstoreBG.jpeg"

export function Home(){
    return (
    <div>
        <h1>Home</h1>
        <h3>To check out the books available, go to the <Link to={"/store"}>store</Link>.</h3>
        <img src={BG} style={{ width: '90vw', height: '100vh', objectFit: 'cover' }}/>
        
        
    </div>
    )
}