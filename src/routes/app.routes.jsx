import { Routes, Route } from 'react-router-dom'
import { New } from '../pages/New'
import { Details } from '../pages/Details'
import { Home } from '../pages/Home'
import { Edit } from '../pages/Edit'


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/new" element={<New/>}/>
      <Route path="/edit/:id" element={<Edit/>}/>
    </Routes>
  )
}