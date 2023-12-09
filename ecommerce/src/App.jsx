import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import CardContainer from './components/CardContainer/CardContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'




function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<CardContainer greeting={ 'Super Menús!!' } />} />
          <Route path='/category/:cid' element={<CardContainer />} />

          <Route path='*' element={ <Navigate to='/' /> } /> 
          <Route path='/detail/:pid' element={ <ItemDetailContainer /> } />   

        </Routes>

        
    </BrowserRouter>
    
  )
}

export default App
