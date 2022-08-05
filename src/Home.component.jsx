import Header from "./Header.component"
import Footer from "./Footer.component"


export default function Home(props){
    return(
        <div>
            <Header/>
            <h1>WELCOME  {props.fullName}</h1>
            <Footer/>
        </div>
    )
}