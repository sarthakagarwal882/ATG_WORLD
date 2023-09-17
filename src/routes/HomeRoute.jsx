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
            <Card img='card-1' type='Article' header='What if famous brands had regular fonts? Meet RegulaBrands!' date='Fri, 12 Oct, 2018' location='Ahmedabad, India' company='Innovaccer Analytics Private Ltd.' desc='I’ve worked in UX for the better part of a decade. From now on, I plan to rei…' button='Visit Website' buttonColor='#02B875' views='1.4k' profileName='Sarthak Kamra' profileImg='sarthak' />
        </>
    )
}
export default HomeRoute