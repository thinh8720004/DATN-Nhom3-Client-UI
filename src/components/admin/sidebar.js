import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/product-management">
              Quản lý sản phẩm
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category-management">
              Quản lý loại sản phẩm
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/customer-management">
              Quản lý khách hàng
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/order-management">
              Quản lý đơn hàng
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/comment-management">
              Quản lý bình luận
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/report-statistics">
              Báo cáo thống kê
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
