import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => (
  <div>
    <h2>Quản lý hàng hóa</h2>
    <nav>
      <ul>
        <li><Link to="/">Trang chủ</Link></li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
