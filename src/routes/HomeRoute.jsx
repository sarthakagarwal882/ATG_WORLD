import Card from "../components/Card"
import Home from "../components/Home"
import Navbar from "../components/Navbar"
import Post from "../components/Post"

const HomeRoute = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Post />
            <Card img='card-1' type='event'/>
        </>
    )
}
export default HomeRoute