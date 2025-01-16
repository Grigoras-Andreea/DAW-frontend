import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPage from './RegisterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}

export default App;

