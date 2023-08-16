import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import EstiloGlobal from './style'
import NewPost from './Pages/NewPost'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newpost" element={<NewPost />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
