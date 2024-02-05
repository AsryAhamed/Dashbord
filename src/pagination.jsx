import React from "react";
import data from "@/assets/data/data.json"; 

import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.products.slice(firstPostIndex, lastPostIndex);

  return (
    <div className='pagination'>
      <div className="navigation-next">
        <IoIosArrowBack onClick={() => setCurrentPage(currentPage - 1)} />
      </div>
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(page)}
          className={page === currentPage ? "active" : ""}
        >
          {page}
        </button>
      ))}
      <div className="navigation-next">
        <MdNavigateNext onClick={() => setCurrentPage(currentPage + 1)} />
      </div>
    </div>
  );
};

export default Pagination;
