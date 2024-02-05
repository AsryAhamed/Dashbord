import React, { useState } from 'react';
import { MdOutlineDashboard } from 'react-icons/md';
import { BsCart2 } from 'react-icons/bs';
import { CiBoxes } from 'react-icons/ci';
import { CgProfile } from 'react-icons/cg';
import { CiSettings } from 'react-icons/ci';
import { AiOutlineShopping } from 'react-icons/ai'; // Added e-commerce icon
import Header from './header.jsx';
import Productcontainer from './productcontainer.jsx';
import Footer from './footer.jsx';
import Pagination from './pagination.jsx';
import data from '@/assets/data/data.json';

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.products.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <div className='dashboard'>
        <div className='dashboard-split'>
          <div className='dashboard-1'>
            <div className='dashboard-menu-container'>
              <h2>
                <AiOutlineShopping className='dashboard-eshop-icon' /> Eshop Spot
              </h2>
              <a href="" style={{ color: 'black' }}>
                <div className='dashboard-menu'>
                  <MdOutlineDashboard className='dashboard-menu-icons' />
                  <p>Dashboard</p>
                </div>
              </a>
              <a href="" style={{ color: 'black' }}>
                <div className='dashboard-menu'>
                  <BsCart2 className='dashboard-menu-icons' />
                  <p>Cart</p>
                </div>
              </a>
              <a href="" style={{ color: 'black' }}>
                <div className='dashboard-menu'>
                  <CiBoxes className='dashboard-menu-icons act' />
                  <p className='act'>Products</p>
                </div>
              </a>
              <a href="" style={{ color: 'black' }}>
                <div className='dashboard-menu'>
                  <CgProfile className='dashboard-menu-icons' />
                  <p>Profile</p>
                </div>
              </a>
              <a href="" style={{ color: 'black' }}>
                <div className='dashboard-menu'>
                  <CiSettings className='dashboard-menu-icons' />
                  <p>Settings</p>
                </div>
              </a>
            </div>
          </div>
          <div className='dashboard-2'>
            <Header />
            <Productcontainer data={currentPosts} />
            <Pagination
              totalPosts={data.products.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
