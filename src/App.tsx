import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'C:/Users/Admin/qlhh/src/pages/Home';
import { Provider } from 'react-redux';
import store from 'C:/Users/Admin/qlhh/src/store';

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
