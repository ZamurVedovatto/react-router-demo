import { Link, Outlet } from 'react-router-dom'

export const Products = () => {
  return (
    <>
      <div>
        <input type="search" placeholder="Search products" />
      </div>
      <nav>
        <Link to='featured'>Featured</Link> {/* this is a relative link */}
         <Link to='new'>Products</Link> {/* this is a relative link */}
        <Link to='/about'>About</Link> {/* this is a absolute link (with /) */}
      </nav>
      <Outlet />
    </>
  )
}