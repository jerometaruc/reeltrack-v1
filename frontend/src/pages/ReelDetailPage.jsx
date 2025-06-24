import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router";
import toast from 'react-hot-toast';
import axios from 'axios';
import { ArrowLeftIcon, LoaderIcon, CircleCheckIcon } from "lucide-react";

const ReelDetailPage = () => {
  const [reel, setReel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchReel = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/reels/${id}`);
        setReel(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.log("Error in fetching reel", error);
        toast.error("Failed to fetch reel");
      } finally {
        setLoading(false);
      }
    }
    fetchReel();
  }, [id])

  const handleDelete = async (e, id) => {
    if(!window.confirm("Watched and ready to delete?")) {
      return;
    }
    try {
      await axios.delete(`http://localhost:3000/api/reels/${id}`);
      toast.success("Watched and Deleted");
      navigate("/");
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete reel");
    }
  };

  const handleSave = async () => {
    if(!reel.title.trim() || !reel.year.trim()) {
      toast.error("All fields are required");
      return;
    }
    setSaving(true);
    try {
      await axios.put(`http://localhost:3000/api/reels/${id}`, reel);
      toast.success("Reel updated successfully");
      navigate("/");
    } catch (error) {
      console.log("Error saving the reel:", error);
      toast.error("Failed to update reel");
    } finally {
      setSaving(false);
    }
  };

  if(loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="btn btn-ghost">
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Reels
            </Link>
            <button onClick={handleDelete} className="btn btn-success btn-outline">
              <CircleCheckIcon className="h-5 w-5" />
              Watched Reel
            </button>
          </div>

          <div className="card bg-base-100">
            <div className="card-body">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Movie title"
                  className="input input-bordered"
                  value={reel.title}
                  onChange={(e) => setReel({ ...reel, title: e.target.value })}
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Year</span>
                </label>
                <input
                  type="text"
                  placeholder="Release year"
                  className="input input-bordered"
                  value={reel.year}
                  onChange={(e) => setReel({ ...reel, year: e.target.value })}
                />
              </div>

              <div className="card-actions justify-end">
                <button className="btn btn-primary" disabled={saving} onClick={handleSave}>
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReelDetailPage;
