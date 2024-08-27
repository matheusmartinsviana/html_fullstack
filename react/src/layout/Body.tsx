import { Outlet } from "react-router-dom"
import Header from "./Header.tsx"
import Footer from "./Footer.tsx"
import React from "react"

const Body: React.FC = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Body