import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import BookCard from './BookCard';
import { fetchBooks } from '../books/api'; 
import { setBooks, likeBook } from '../books/booksSlice';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const data = await fetchBooks();
        dispatch(setBooks(data)); 
      } catch (error) {
        console.error('Failed to fetch books:', error);
      }
    };

    loadBooks();
  }, [dispatch]);

  const handleLike = (id) => {
    dispatch(likeBook(id)); 
  };

  return (
    <Container className="mt-4">
      <Row>
        {Array.isArray(books) && books.length > 0 ? (
          books.map((book) => (
            <Col key={book.id} sm={12} md={6} lg={4}>
              <BookCard book={book} onLike={handleLike} />
            </Col>
          ))
        ) : (
          <Col>
            <p>No books available.</p> 
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default BookList;
