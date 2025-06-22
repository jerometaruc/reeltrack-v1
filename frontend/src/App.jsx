import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage.jsx';
import CreatePage from './pages/CreatePage.jsx';
import toast from 'react-hot-toast';

const App = () => {
  return (
    <div date-theme="night">
      <button onClick={() => toast.success("Clicked")} className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button>
      <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} /> 
        </Routes>
    </div>
  );
};

export default App;
