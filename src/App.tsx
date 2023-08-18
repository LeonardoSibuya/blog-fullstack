import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

import Home from './Pages/Home'
import NewPost from './Pages/NewPost'

import EstiloGlobal from './style'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newpost" element={<NewPost />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
