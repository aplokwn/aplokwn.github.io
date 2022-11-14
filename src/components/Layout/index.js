import { Outlet } from 'react-router-dom'
import Sidebar from '../SideBar'
import './index.scss'


const Layout = () => {
  return (
    <>
      <div className='App'>
        <Sidebar />
        <div className='page'>
          <span className='tags top-tags'> public static void main( String[] args ) &#123; </span>
          <span className='tags top-tags-print' >System.out.println &#40; </span>
          <Outlet />
          <span className='tags bottom-tags'>
            <span className='tags bottom-tag-close'>&quot; &#41;; </span>
            <br />
            &#41;
            <br />
            <br />
            <span className='tags bottom-tag-html'>&#125;</span>
          </span>
        </div>
      </div>
    </>
  )

}

export default Layout
