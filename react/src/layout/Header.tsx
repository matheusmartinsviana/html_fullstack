import React from "react"
import { Link } from "react-router-dom"
import "./styles/header.css"

const Header: React.FC = () => {
    return (
        <header className="header">
            <Link to="/">Home</Link>
            <Link to="/basic">Basic</Link>
            <Link to="/grid">Grid</Link>
            <Link to="/flex">Flex</Link>
            <Link to="/todolist">Todo List</Link>
        </header>
    )
}

export default Header