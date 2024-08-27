import React from "react"
import "./styles/footer.css"
import { Link } from "react-router-dom"

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <section className="sitemap">
                <h3>Site Map</h3>
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                </ul>
                <ul>
                    <Link to="/basic">
                        <li>Basic</li>
                    </Link>
                </ul>
                <ul>
                    <Link to="/grid">
                        <li>Grid</li>
                    </Link>
                </ul>
                <ul>
                    <Link to="/todolist">
                        <li>Todo List</li>
                    </Link>
                </ul>
            </section>
        </footer>
    )
}

export default Footer