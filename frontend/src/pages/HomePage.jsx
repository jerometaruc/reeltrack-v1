import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import NavBar from '../components/NavBar';
import ReelCard from '../components/ReelCard';

const HomePage = () => {
  const [reels, setReels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReels = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/reels");
        console.log(res.data);
        setReels(res.data.data);
      } catch (error) {
        console.log("Error getting Reels");
        toast.error("Failed to load Reels")
      } finally {
        setLoading(false);
      }
    };
    fetchReels();
  }, [])

  return (
    <div className="min-h-screen bg-base-200">
      <NavBar />
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && <div className="text-center text-primary py-10">Loading Reels</div>}
        {reels.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reels.map((reel) => (
              <ReelCard key={reel._id} reel={reel} setReels={setReels} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
