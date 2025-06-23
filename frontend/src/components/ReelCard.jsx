import React from 'react';
import axios from 'axios';
import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import toast from 'react-hot-toast';
import { formatDate } from "../lib/utils";

const ReelCard = ({reel, setReels}) => {
  const handleDelete = async (e, id) => {
    if(!window.confirm("Are you sure you want to delete this note?")) {
      return;
    }
    try {
      await axios.delete(`http://localhost:3000/api/reels/${id}`);
      setReels((prev) => prev.filter((reel) => reel._id !== id));
      toast.success("Reel deleted successfully");
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete reel");
    }
  }

  return (
    <div
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 
      border-t-4 border-solid border-primary"
    >
        <div className="card-body">
            <h3 className="card-title text-base-content">{reel.title}</h3>
            <p className="text-base-content/70 line-clamp-3">{reel.year}</p>
            <div className="card-actions justify-between items-center mt-4">
            <span className="text-sm text-base-content/60">
              {formatDate(new Date(reel.createdAt))}
            </span>
            <div className="flex items-center gap-1">
              <Link
                to={`/reel/${reel._id}`}
                className="btn btn-ghost btn-xs"
              >
              <PenSquareIcon className="size-4" />
              </Link>
              <button
                className="btn btn-ghost btn-xs text-error"
                onClick={(e) => handleDelete(e, reel._id)}
              >
              <Trash2Icon className="size-4" />
              </button>
            </div>
            </div>
        </div>
    </div>
  );
};

export default ReelCard;
