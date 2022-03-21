import PaginationItem from '../PaginationItem';

import { Container, Content } from './styles';

export function Pagination() {
  const currentPage = 1;
  const totalPages = 2;

  const siblingsCount = 1;

  function generatePagesArray(from, to) {
    return [...new Array(to - from)]
      .map((_, index) => from + index + 1)
      .filter((page) => page > 0);
  }

  function handlePage(indexPage) {
    dispatch(setPage({ page: indexPage }));
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
          onClick={() => handlePage(page)}
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
          onClick={() => console.log('next')}
          disabled={currentPage === 1}
        >
          &lt;
        </PaginationItem>
        <PaginationItem
          type="submit"
          onClick={() => console.log('prev')}
          disabled={currentPage === totalPages}
        >
          &gt;
        </PaginationItem>
      </Content>
    </Container>
  );
}
