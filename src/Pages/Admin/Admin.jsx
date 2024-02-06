import AddProduct from '../../Components/AddProduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListProduct'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import './Admin.css'

const Admin = () => {
  return (
    <div className='admin'>
        <Sidebar />
        <AddProduct />
        <ListProduct />
        <Routes>
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='/listproduct' element={<ListProduct />} />
        </Routes>
    </div>
  )
}

export default Admin