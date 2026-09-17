import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PaginationContainer = () => {
  const { meta } = useLoaderData();

  const { pageCount, page } = meta.pagination;

  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const renderPageButtons = () => {
    const pageButtons = [];

    const addPageButton = (pageNumber, activeClass) => {
      return (
        <button
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          className={`btn btn-xs sm:btn-md border-none join-item transition-all ${
            activeClass
              ? "bg-primary text-primary-content hover:bg-primary-focus scale-105 shadow-inner"
              : "hover:bg-base-300"
          }`}
        >
          {pageNumber}
        </button>
      );
    };

    if (pageCount <= 5) {
      for (let i = 1; i <= pageCount; i++) {
        pageButtons.push(addPageButton(i, i === page));
      }
    } else {
      // First page
      pageButtons.push(addPageButton(1, page === 1));

      if (page <= 3) {
        pageButtons.push(addPageButton(2, page === 2));
        pageButtons.push(addPageButton(3, page === 3));
        pageButtons.push(
          <button key="dots-1" className="btn btn-xs sm:btn-md border-none join-item" disabled>
            ...
          </button>
        );
      } else if (page >= pageCount - 2) {
        pageButtons.push(
          <button key="dots-1" className="btn btn-xs sm:btn-md border-none join-item" disabled>
            ...
          </button>
        );
        pageButtons.push(addPageButton(pageCount - 2, page === pageCount - 2));
        pageButtons.push(addPageButton(pageCount - 1, page === pageCount - 1));
      } else {
        pageButtons.push(
          <button key="dots-1" className="btn btn-xs sm:btn-md border-none join-item" disabled>
            ...
          </button>
        );
        pageButtons.push(addPageButton(page - 1, false));
        pageButtons.push(addPageButton(page, true));
        pageButtons.push(addPageButton(page + 1, false));
        pageButtons.push(
          <button key="dots-2" className="btn btn-xs sm:btn-md border-none join-item" disabled>
            ...
          </button>
        );
      }

      // Last page
      pageButtons.push(addPageButton(pageCount, page === pageCount));
    }

    return pageButtons;
  };

  if (pageCount < 2) {
    return null;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-16 flex justify-end"
    >
      <div className="join shadow-md">
        <button
          className="btn btn-xs sm:btn-md join-item hover:bg-base-300 transition-colors"
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageChange(prevPage);
          }}
        >
          Prev
        </button>
        {renderPageButtons()}
        <button
          className="btn btn-xs sm:btn-md join-item hover:bg-base-300 transition-colors"
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePageChange(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </motion.div>
  );
};

export default PaginationContainer;
