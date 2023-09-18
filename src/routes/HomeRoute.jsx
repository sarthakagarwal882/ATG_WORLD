import Home from "../components/Home"
import Navbar from "../components/Navbar"
import Post from "../components/Post"
import CardRoute from "./CardRoute/CardRoute"
import Location from "../components/Location"
import './HomeRouteStyles.css'
import Recommended from "../components/Recommended"
import { Route, Routes, useLocation } from "react-router-dom"
import Register from "../components/Register"
import Login from "../components/Login"
import { useState } from "react"

const HomeRoute = () => {
    const location = useLocation()
    console.log(location.state);
    // eslint-disable-next-line no-unused-vars
    const [userstate, setUserState] = useState(location.state)
    const [viewport, setViewport] = useState(window.innerWidth <= 1000 ? 'none' : 'flex')
    const handleViewport = () => {
        if ((window.innerWidth) <= 1000)
            setViewport('none')
        else
            setViewport('flex')
    }
    window.addEventListener('resize', handleViewport)

    return (
        <>
            <Navbar state={location.state} />
            <Home state={location.state} />
            <Post />
            <div className="home-r-card-loc">
                <CardRoute />
                <div className="home-r-loc-rec" style={{ display: viewport }}>
                    <Location />
                    {(userstate) &&
                        <Recommended />
                    }
                </div>
            </div>

            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    )
}
export default HomeRoute