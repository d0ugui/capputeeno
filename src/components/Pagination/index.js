//* React
import { useContext } from 'react';

//* Context
import { StoreContext } from '../../context/storeContext';

//* Components
import PaginationItem from '../PaginationItem';

//* Styles
import { Container, Content } from './styles';

export function Pagination() {
  const {
    currentPage,
    setCurrentPage,
    totalPages,
  } = useContext(StoreContext);

  const siblingsCount = 1;

  function generatePagesArray(from, to) {
    return [...new Array(to - from)]
      .map((_, index) => from + index + 1)
      .filter((page) => page > 0);
  }

  const previousPage = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : [];

  const nextPage = currentPage < totalPages
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, totalPages))
    : [];

  return (
    <Container>
      <Content>
        {previousPage.length > 0 && previousPage.map((page) => (
          <PaginationItem
            onClick={() => handlePage(page)}
            key={page}
            disabled
          >
            {page}
          </PaginationItem>
        ))}

        <PaginationItem
          onClick={() => handlePage(currentPage)}
          selected
          disabled
        >
          {currentPage}
        </PaginationItem>

        {nextPage.length > 0 && nextPage.map((page) => (
          <PaginationItem
            onClick={() => handlePage(page)}
            key={page}
            disabled
          >
            {page}
          </PaginationItem>
        ))}

        <PaginationItem
          type="submit"
          onClick={() => setCurrentPage((prevState) => prevState - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </PaginationItem>
        <PaginationItem
          type="submit"
          onClick={() => setCurrentPage((prevState) => prevState + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </PaginationItem>
      </Content>
    </Container>
  );
}
