import React from 'react'
import {Route, Routes} from 'react-router-dom'
import route_list from '../config/route-list'
import MainLayout from '../layout/MainLayout'
const MainRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        {route_list.map((route, index) => {
          return <Route key={index} {...route} />
        })}
      </Route>
    </Routes>
  )
}
export default MainRoute
