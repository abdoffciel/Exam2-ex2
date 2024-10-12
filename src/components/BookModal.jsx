import { Modal, Button } from 'react-bootstrap';

const BookModal = ({ show, handleClose, book, handleSave }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{book ? book.title : 'New Book'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={book.image} alt={book.title} className="img-fluid" />
        <h3>{book.title}</h3>
        <h5>Author: {book.author}</h5>
        <p>Likes: {book.likes}</p>
        <p>{book.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} className="me-2 btn btn-secondary">
          Close
        </Button>
        <Button 
          className="btn btn-primary" 
          onClick={() => handleSave(book)}
        >
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookModal;
