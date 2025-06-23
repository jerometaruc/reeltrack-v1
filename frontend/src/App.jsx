import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage.jsx';
import CreatePage from './pages/CreatePage.jsx';
import ReelDetailPage from './pages/ReelDetailPage.jsx';
import toast from 'react-hot-toast';

const App = () => {
  return (
    <div date-theme="night">
      <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} /> 
            <Route path="/reel/:id" element={<ReelDetailPage />} />
        </Routes>
    </div>
  );
};

export default App;
