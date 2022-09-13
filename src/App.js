import{Routes,Route} from 'react-router-dom'

import Home from './components/Home.js'
import About from './components/About.js'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
    </Routes>
  );
}

export default App;
