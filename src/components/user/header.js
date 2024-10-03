import React from 'react';

const Header = ({ toggleAdmin }) => {
  return (
    <header>
   
      <div className="banner">
        {/* <img 
          src="https://cdn.nhathuoclongchau.com.vn/unsafe/1920x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/trungthu_11_09_2024_desktop_3_cc04c02ad1.png" 
          alt="" 
          className="banner-img" 
        /> */}
        <div className='logo'>
          <img 
            src="logoo.png" 
            alt='logo' 
          />
        </div>
        <div className='search'>
          <input 
            type="text" 
            placeholder="Tìm kiếm sản phẩm..." 
            className="search-input" 
            
          />
           <button className="search-button">
            <svg xmlns="http://www.w3.org/2000/svg"   width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a5.5 5.5 0 1 0-1.15 1.15l3.68 3.68a1 1 0 0 0 1.415-1.415l-3.68-3.68zm-5.742-.844a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z"/>
            </svg>
          </button>
         
        </div>
        <div class="button-login">
        <i class="fa-solid fa-user"></i>
         <span>Đăng nhập</span>
        </div>
        </div>
        <div className='list-menu'>
          <ul className='menu'>
            <li><a href="/thuc-pham-chuc-nang">Thực phẩm chức năng</a></li>
            <li><a href="/thuc-pham-chuc-nang">Dược mỹ phẩm</a></li>
            <li><a href="/thuc-pham-chuc-nang">Chăm sóc cá nhân</a></li>
            <li><a href="/thuc-pham-chuc-nang">Thuốc</a></li>
            <li><a href="/thuc-pham-chuc-nang">Thiết bị y tế</a></li>
            <li><a href="/thuc-pham-chuc-nang">Tiêm chủng</a></li>
            <li><a href="/thuc-pham-chuc-nang">Bệnh</a></li>
            <li><a href="/thuc-pham-chuc-nang">Góc sức khỏe</a></li>
            <li><a href="/thuc-pham-chuc-nang">Hệ thống nhà thuốc</a></li>
          </ul>
        </div>
      
      <button onClick={toggleAdmin} className="btn btn-primary">
        Switch to Admin
      </button>
      {/* <nav>
        <a href="/">Thực phẩm chức năng</a>
        <a href="/cart">Cart</a>
        <a href="/cart">Cart</a>
        <a href="/cart">Cart</a>
        <a href="/cart">Cart</a>
      </nav> */}
      <ul>
        <li className="hh">
          <a className="vinh" href="/thuc-pham-chuc-nang">Hệ thống nhà thuốc</a>
          <p>vinh</p>
        </li>
      </ul>
    </header>
  );
};

export default Header;
