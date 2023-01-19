import { Outlet } from 'react-router-dom'
import Sidebar from '../SideBar'
import './index.scss'


const Layout = () => {
  return (
    <>
      <div className='App'>
        <Sidebar />
        <div className='page'>
          <span className='tags top-tags'></span>
          <span className='tags top-tags-print' > </span>
          <Outlet />
          <span className='tags bottom-tags'>
            <span className='tags bottom-tag-close'></span>
            <br />


            <span className='tags bottom-tag-html'></span>
          </span>
        </div>
      </div>
    </>
  )

}

export default Layout
