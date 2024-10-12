
import { useSelector, useDispatch } from 'react-redux';
import { Container, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import { removeBook } from '../books/booksSlice'; 

const Save = () => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const savedBooks = useSelector((state) => state.books.savedBooks); 

  const handleRemove = (id) => {
    dispatch(removeBook(id));
    if (savedBooks.length === 1) {
      navigate('/books'); 
    }
  };

  return (
    <Container className="mt-4">
      <h2>Saved Books</h2>
      {savedBooks.length === 0 ? (
        <p>No books saved yet.</p>
      ) : (
        savedBooks.map((book) => (
          <Card className="mb-3 p-3" key={book.id}> 
            <Card.Img variant="top" src={book.image} alt={book.title} className="w-100" />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
              <Card.Text>Likes: {book.likes}</Card.Text>
              <Button variant="secondary" onClick={() => handleRemove(book.id)}>
                Remove
              </Button>
            </Card.Body>
          </Card>
        ))
      )}
    </Container>
  );
};

export default Save;
