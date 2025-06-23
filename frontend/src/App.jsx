import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage.jsx';
import CreatePage from './pages/CreatePage.jsx';
import toast from 'react-hot-toast';

const App = () => {
  return (
    <div date-theme="night">
      <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} /> 
        </Routes>
    </div>
  );
};

export default App;
