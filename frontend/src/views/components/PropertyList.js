import React from 'react';
import DataTable from "react-data-table-component";
import "bootstrap/dist/js/bootstrap.bundle.js";

export default function PropertyList({image}){

  let propertyList = [];
  for(var i = 1; i < 100; i++){
    propertyList.push(
      {
        id: i,
        title: "Beetlejuice" + i,
        year: "1988",
        runtime: "92" + i,
        genres: ["Comedy", "Fantasy"],
        director: "Tim Burton",
        actors: "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",
        plot:
          'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
        posterUrl:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg"
      }
    );
  };


  function getNumberOfPages(rowCount, rowsPerPage) {
    return Math.ceil(rowCount / rowsPerPage);
  }
  
  function toPages(pages) {
    const results = [];
  
    for (let i = 1; i < pages; i++) {
      results.push(i);
    }
  
    return results;
  }
  
  const columns = [
    {
      name: "都道府県",
      selector: (row) => row.title,
      sortable: true
    },
    {
      name: "市区町村",
      selector: (row) => row.title,
      sortable: true
    },
    {
      name: "土地面積",
      selector: (row) => row.director,
      sortable: true
    },
    {
      name: "価格",
      selector: (row) => row.director,
      sortable: true
    },
    {
      name: "詳細",
      selector: (row) => row.runtime,
      sortable: true,
      right: true
    }
  ];
  
  // RDT exposes the following internal pagination properties
  const BootyPagination = ({
    rowsPerPage,
    rowCount,
    onChangePage,
    onChangeRowsPerPage, // available but not used here
    currentPage
  }) => {
    const handleBackButtonClick = () => {
      onChangePage(currentPage - 1);
    };
  
    const handleNextButtonClick = () => {
      onChangePage(currentPage + 1);
    };
  
    const handlePageNumber = (e) => {
      onChangePage(Number(e.target.value));
    };
  
    const pages = getNumberOfPages(rowCount, rowsPerPage);
    const pageItems = toPages(pages);
    const nextDisabled = currentPage === pageItems.length;
    const previosDisabled = currentPage === 1;

    return (
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={handleBackButtonClick}
              disabled={previosDisabled}
              aria-disabled={previosDisabled}
              aria-label="previous page"
            >
              Previous
            </button>
          </li>
          {pageItems.map((page) => {
            const className =
              page === currentPage ? "page-item active" : "page-item";
  
            return (
              <li key={page} className={className}>
                <button
                  className="page-link"
                  onClick={handlePageNumber}
                  value={page}
                >
                  {page}
                </button>
              </li>
            );
          })}
          <li className="page-item">
            <button
              className="page-link"
              onClick={handleNextButtonClick}
              disabled={nextDisabled}
              aria-disabled={nextDisabled}
              aria-label="next page"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  };
   
  // const BootyCheckbox = React.forwardRef(({ onClick, ...rest }, ref) => (
  //   <div className="form-check">
  //     <input
  //       htmlFor="booty-check"
  //       type="checkbox"
  //       className="form-check-input"
  //       ref={ref}
  //       onClick={onClick}
  //       {...rest}
  //     />
  //     <label className="form-check-label" id="booty-check" />
  //   </div>
  // ));

  return (
    <div className="App">
      <div className="card">
        <DataTable
          title="買いたい情報"
          columns={columns}
          data={propertyList}
          defaultSortFieldID={1}
          pagination
          paginationComponent={BootyPagination}
        />
      </div>
    </div>
  );
};