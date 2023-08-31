import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

function App () {
  return (
    // <>
    //     <NavBar/>
    //     <ItemListContainer/>
    //     </>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        {/* <Route path="users/*" element={<Users />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App

