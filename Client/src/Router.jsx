import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeComp from './Pages/Home'
import DetailedPageComp from './Pages/DetailedPage'


function Router() {
 

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomeComp/>}/>
       <Route path='detailed-page/:id' element={<DetailedPageComp/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default Router
