// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

/* Yang diatas bawaan */

/* Versi 1
import React from 'react';
import Home from './Home';

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
*/

// Versi 2
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Ganti Switch dengan Routes
// import Home from './Home';
// import TambahCatatan from './TambahCatatan';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/tambah-catatan" element={<TambahCatatan />} /> {/* Ganti Route */}
//           <Route path="/" element={<Home />} /> {/* Ganti Route */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// Versi 3
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import TambahCatatan from './pages/TambahCatatan';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tambah-catatan" component={TambahCatatan} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;



