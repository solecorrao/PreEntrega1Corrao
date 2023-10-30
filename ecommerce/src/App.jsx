

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/navbar/NavBar'

function App() {
 return (
    <>
    <NavBar />
    <ItemListContainer greeting={"Bienvenidos!"} />
    </>
  )
}

export default App
