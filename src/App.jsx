import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'  // ⬅️ IMPORT AJOUTÉ
import Child1 from './Pages/Children/Child1'
import Child2 from './Pages/Children/Child2'
import Child3 from './Pages/Children/Child3'
import Child4 from './Pages/Children/Child4'
import Child5 from './Pages/Children/Child5'
import Child6 from './Pages/Children/Child6'
import Child7 from './Pages/Children/Child7'
import Child8 from './Pages/Children/Child8'




function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/jean' element={<Child1/>}/>
          <Route path='/elfise' element={<Child2/>}/>
          <Route path='/renel' element={<Child3/>}/>
          <Route path='/dominique' element={<Child4/>}/>
          <Route path='/lecifort' element={<Child5/>}/>
          <Route path='/denise' element={<Child6/>}/>
          <Route path='/fresnel' element={<Child7/>}/>
          <Route path='/julius' element={<Child8/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App