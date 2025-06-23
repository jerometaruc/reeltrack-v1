import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage.jsx';
import AddPage from './pages/AddPage.jsx';
import ReelDetailPage from './pages/ReelDetailPage.jsx';

const App = () => {
  return (
    <div date-theme="night">
      <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddPage />} /> 
            <Route path="/reel/:id" element={<ReelDetailPage />} />
        </Routes>
    </div>
  );
};

export default App;
