import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './app/pages/HomePage';
import Repos from './app/pages/Repos';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/repos/:username' element={<Repos />} />
      </Routes>
    </Router>
  );
}

export default App;
