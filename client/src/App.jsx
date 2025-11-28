import './App.css'
import { Nav } from './components/Nav.jsx';
import { ScriptPage } from './ScriptPage.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Routes>
        <Route path="/" element={<ScriptPage/>}/>
      </Routes>
    </div>
  )
}

export default App
