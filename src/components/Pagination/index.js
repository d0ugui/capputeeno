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
    totalPages,
    currentPage,
    handleChangeProductPage,
  } = useContext(StoreContext);
  const pages = [...Array(totalPages)].map((_, index) => index);

  return (
    <Container>
      <Content>
        {pages.length > 1 ? (
          pages.map((page) => (
            <PaginationItem
              key={page}
              selected={page === currentPage}
              onClick={() => handleChangeProductPage(page)}
            >
              {page + 1}
            </PaginationItem>
          ))
        ) : (
          <PaginationItem
            selected
            onClick={() => handleChangeProductPage(0)}
          >
            {1}
          </PaginationItem>
        )}

        <PaginationItem
          type="submit"
          onClick={() => handleChangeProductPage(currentPage - 1)}
          disabled={currentPage === 0}
        >
          &lt;
        </PaginationItem>
        <PaginationItem
          type="submit"
          onClick={() => handleChangeProductPage(currentPage + 1)}
          disabled={currentPage + 1 === totalPages}
        >
          &gt;
        </PaginationItem>
      </Content>
    </Container>
  );
}
