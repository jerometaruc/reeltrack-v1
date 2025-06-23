import React from 'react';
import { Trash2Icon } from 'lucide-react';
import { formatDate } from "../lib/utils";

const ReelCard = ({reel}) => {
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
                <button
                className="btn btn-ghost btn-xs text-error"
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