import React, { useState } from 'react';
import { ArrowLeftIcon } from 'lucide-react';
import { Link } from 'react-router';

const AddPage = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = () => {

  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto"></div>
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" />
            Back to Reels
          </Link>
          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Add New Reel</h2>
            </div>
          </div>
      </div>
    </div>
  );
};

export default AddPage;
