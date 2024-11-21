import React from 'react';
import Sidebar from 'C:/Users/Admin/qlhh/src/components/Sidebar';
import ProductTable from 'C:/Users/Admin/qlhh/src/components/ProductTable';
import SearchBar from 'C:/Users/Admin/qlhh/src/components/SearchBar';
import ProductForm from 'C:/Users/Admin/qlhh/src/components/ProductForm';

const Home: React.FC = () => (
  <div>
    <Sidebar />
    <div>
      <h1>Bảng Thông Tin</h1>
      <SearchBar />
      <ProductForm />
      <ProductTable />
    </div>
  </div>
);

export default Home;
