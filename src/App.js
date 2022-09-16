import{Routes,Route} from 'react-router-dom'

import { Navbar } from './components/Navbar.js'
import { Home } from './components/Home.js'
import { About } from './components/About.js'
import { OrderSummary } from './components/OrderSummary.js'
import { Products } from './components/Products.js'
import { FeaturedProducts } from './components/FeaturedProducts'
import { NewProducts } from './components/NewProducts'
import { Users } from './components/Users.js'
import { UserDetails } from './components/UserDetails.js'
import { Admin } from './components/Admin.js'
import { NoMatch } from './components/NoMatch.js'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />} >
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
