import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom"
import Junior from "./pages/Junior"
import JuniorPlus from "./pages/JuniorPlus"
import Error404 from "./pages/Error404"
import PreJunior from "./pages/PreJunior"


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>
                {/*роутинг будут писать студенты*/}
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior*/}
                
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>} />
                <Route path='/' element={<Navigate to={PATH.PRE_JUNIOR}/>} />
                <Route path={PATH.JUNIOR} element={<Junior/>} />
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>} />

                <Route path='/error404' element={<Error404/>} />
                <Route path='*' element={<Navigate to={'/error404'}/>} />

                {/*роут для несуществующей страницы должен отрисовать <Error404 />*/}
                {/*<Route ...*/}
            </Routes>
        </div>
        
    )
}

export default Pages
