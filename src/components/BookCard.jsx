import { useState } from 'react';
import { Card, Button } from 'react-bootstrap'; 
import { FaThumbsUp } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { saveBook } from '../books/booksSlice'; 
import BookModal from './BookModal'; 

const BookCard = ({ book, onLike }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Function to handle save action
  const handleSave = (bookToSave) => {
    dispatch(saveBook(bookToSave)); 
    handleClose(); 
  };

  return (
    <>
      <Card className="m-3" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Img variant="top" src={book.image} />
          <Card.Title>{book.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
          <Card.Text>Likes: {book.likes}</Card.Text>
          <Button variant="primary" onClick={handleShow}>
            View Details
          </Button>
          <Button variant="success" className="ms-2" onClick={() => onLike(book.id)}>
            <FaThumbsUp className="me-2" /> Like
          </Button>
        </Card.Body>
      </Card>
      <BookModal 
        show={showModal} 
        handleClose={handleClose} 
        book={book} 
        handleSave={handleSave} 
      />
    </>
  );
};

export default BookCard;
