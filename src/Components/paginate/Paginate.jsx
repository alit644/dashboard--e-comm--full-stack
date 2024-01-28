/* eslint-disable react/prop-types */
import ReactPaginate from 'react-paginate';
import './paginate.css'
import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from '@mui/icons-material';



export default function PaginatedItems({ itemsPerPage , total , setPage }) {
  const pageCount = total / itemsPerPage
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<KeyboardDoubleArrowRight sx={{m:'2px'}}/>}
        onPageChange={(e) => setPage(e.selected + 1)}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel={<KeyboardDoubleArrowLeft sx={{m:'2px'}}/>}
        renderOnZeroPageCount={null}
        containerClassName={'custom-pagintaion'}
        pageLinkClassName={"pagintaion-tag"}
        activeLinkClassName={"pagintaion-tag-active"}
        previousClassName={"prev"}
        nextClassName={"next"}
        disabledClassName={"disabled"}
      />
    </>
  );
}
