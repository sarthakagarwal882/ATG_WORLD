import Home from "../components/Home"
import Navbar from "../components/Navbar"
import Post from "../components/Post"
import CardRoute from "./CardRoute/CardRoute"

const HomeRoute = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Post />
            {/* <div style={{display:'flex',flexDirection:'row'}}> */}
            <CardRoute/>
            {/* </div> */}
        </>
    )
}
export default HomeRoute