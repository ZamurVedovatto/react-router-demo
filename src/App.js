import{Routes,Route} from 'react-router-dom'

import { Navbar } from './components/Navbar.js'
import { Home } from './components/Home.js'
import { About } from './components/About.js'
import { OrderSummary } from './components/OrderSummary.js'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="/order-summary" element={<OrderSummary />}></Route>
      </Routes>
    </>
  );
}

export default App;
