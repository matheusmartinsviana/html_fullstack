import Body from "../layout/Body.tsx"
import Home from "../pages/Home/Home.tsx"
import Basic from "../pages/Basic/Basic.tsx"
import Flex from "../pages/Flex/Flex.tsx"
import Grid from "../pages/Grid/Grid.tsx"
import TodoList from "../pages/TodoList/TodoList.tsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from "react"

const AppRoutes: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Body />}>
                <Route path='/' element={<Home />} />
                <Route path='/basic' element={<Basic />} />
                <Route path='/flex' element={<Flex />} />
                <Route path='/grid' element={<Grid />} />
                <Route path='/todolist' element={<TodoList />} />
            </Route>
        </Routes>
    </BrowserRouter>
)

export default AppRoutes
