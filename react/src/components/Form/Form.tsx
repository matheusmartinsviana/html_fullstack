import "./form.css"
import React, { useState } from "react"

const Form: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        course: "",
        year: 0,
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        e.preventDefault()
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    return (
        <form action="#" id="forms">
            <label>Just a simple form</label>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Write your name"
                onChange={onChange}
            />

            <input
                type="text"
                name="course"
                id="course"
                placeholder="Write your course"
                onChange={onChange}
            />

            <input
                type="number"
                name="year"
                id="year"
                placeholder="Write a year"
                onChange={onChange}
            />

            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form
