// import './App.css';
// import Header from './components/header/header';
// import Main from './components/main/main';
// import Footer from './components/footer/Footer';

// function App() {
//   return (
//     <div className='container'>
//       <Header/>
//       <Main/>
//       <Footer/>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/Footer';
import LoginPage from './pages/login/LoginPage';
import TableBooking from './pages/tablebooking/TableBooking';
import About from './pages/about_screen/About';
import Menu from './pages/menu/Menu';
import OnlineOrder from './pages/OnlineOrder';

function App() {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<TableBooking />} />
          <Route path="/online_order" element={<OnlineOrder />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;