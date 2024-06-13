import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "../../Pages/Customers";
import Dashboard from "../../Pages/Dashbaord";
import Inventory from "../../Pages/Inventory";
import Orders from "../../Pages/Orders";
import UserCreate from "../../Pages/Users/UserCreate";
import Userlist from "../../Pages/Users/Userlist";
import UserView from "../../Pages/Users/UserView";
import UserEdit from "../../Pages/Users/UserEdit";

import ProductCreate from "../../Pages/Products/ProductCreate";
import Productlist from "../../Pages/Products/Productlist";
import ProductView from "../../Pages/Products/ProductView";
import ProductEdit from "../../Pages/Products/ProductEdit";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/customers" element={<Customers />}></Route>
      <Route path="/user-list" element={<Userlist />} />
      <Route path="/create-user" element={<UserCreate />} />
      <Route path="/user-view/:id" element={<UserView />} />
      <Route path="/user-edit/:id" element={<UserEdit />} />

      <Route path="/product-list" element={<Productlist />} />
      <Route path="/create-product" element={<ProductCreate />} />
      <Route path="/product-view/:id" element={<ProductView />} />
      <Route path="/product-edit/:id" element={<ProductEdit />} />
    </Routes>
  );
}
export default AppRoutes;
