import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container className="text-center mt-5">
      <h1>Welcome to the Book Store</h1>
      <p>Browse through our collection of books. Click below to see the latest books.</p>
      <Button variant="primary" as={Link} to="/books">
        Browse Books
      </Button>
    </Container>
  );
};

export default Home;
