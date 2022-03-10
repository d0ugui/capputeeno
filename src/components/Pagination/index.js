import { useDispatch, useSelector } from 'react-redux';
import { next, previous, setPage } from '../../features/page.js';

import PaginationItem from '../PaginationItem';

import { Container, Content } from './styles';


export function Pagination() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.page.currentPage) + 1;
  const totalPages = useSelector((state) => state.page.totalPages);

  const siblingsCount = 2;

  function generatePagesArray(from, to) {
    return [...new Array(to - from)]
      .map((_, index) => {
        return from + index + 1
      })
      .filter(page => page > 0)
  }

  function handlePage(indexPage) {
    dispatch(setPage({ page: indexPage}))
  }

  const previousPage = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

  const nextPage = currentPage < totalPages
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, totalPages))
    : []

  return (
    <Container>
      <Content>
        {previousPage.length > 0 && previousPage.map((page) => {
          return <PaginationItem onClick={() => handlePage(page)} key={page}>{page}</PaginationItem>
        })}

        <PaginationItem onClick={() => handlePage(page)} selected>{currentPage}</PaginationItem>

        {nextPage.length > 0 && nextPage.map((page) => {
          return <PaginationItem onClick={() => handlePage(page)} key={page}>{page}</PaginationItem>
        })}

        <PaginationItem
          type="submit"
          onClick={() => dispatch(previous())}
          disabled={currentPage === 1 ? true : false}
        >
          &lt;
        </PaginationItem>
        <PaginationItem
          type="submit"
          onClick={() => dispatch(next())}
          disabled={currentPage === totalPages ? true : false}
        >
          &gt;
        </PaginationItem>
      </Content>
    </Container>
  );
}
