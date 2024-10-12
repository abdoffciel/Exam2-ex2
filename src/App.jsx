import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import AppNavbar from './components/Navbar';
import BookList from './components/BookList';
import Home from './pages/Home';
import Save from './pages/Save'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/savedata" element={<Save />} /> 
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
