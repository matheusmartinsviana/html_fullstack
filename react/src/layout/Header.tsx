import React from "react"
import { Link } from "react-router-dom"

const Header: React.FC = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/basic">Basic</Link>
            <Link to="/grid">Grid</Link>
            <Link to="/flex">Flex</Link>
            <Link to="/todolist">Todo List</Link>
        </>
    )
}

export default Header