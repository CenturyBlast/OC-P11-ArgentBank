import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './sass/main.css';
import Header from './components/Header/header';
import Landing from './pages/Landing/landing';
import SignIn from './pages/SignIn/signin';
import User from './pages/User/user';
import Footer from './components/Footer/footer';

// REDUX
import { Provider } from 'react-redux';
import { store } from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store} >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/user" element={<User />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>
);