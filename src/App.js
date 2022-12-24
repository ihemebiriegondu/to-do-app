import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './pages/Intro';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Intro />} />
        </Routes>
    </Router>
  );
}

export default App;
