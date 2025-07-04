import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeComp from './Pages/Home'


function Router() {
 

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomeComp/>}/>
     </Routes>
    </BrowserRouter>
  )
}
export default Router
