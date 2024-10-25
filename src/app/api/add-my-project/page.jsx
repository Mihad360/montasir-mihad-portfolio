"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProjectForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(["", "", ""]);
  const [skills, setSkills] = useState([""]);
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");

  const handleDescriptionChange = (index, value) => {
    const updatedDescription = [...description];
    updatedDescription[index] = value;
    setDescription(updatedDescription);
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  const addSkill = () => {
    setSkills([...skills, ""]);
  };

  const removeSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    const newProject = { 
      title: title, 
      description: description, 
      skills: skills, 
      image: image, 
      link: link };
    const res = await axios.post('https://montasir-mihad-portfolio-server.vercel.app/projects', newProject)
    if(res.status === 200){
      e.target.reset()
      toast.success('Project added successfully ✔️', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }else{
      toast.error('Project adding Failed ❌', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    console.log(res);
  };

  return (
    <div className="pt-28 pb-12">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-8 rounded-xl shadow-lg max-w-6xl mx-auto border border-gray-200"
        style={{
          borderRadius: "20px",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2 className="text-3xl font-bold text-center text-fuchsia-950 mb-6">
          Add New Project
        </h2>

        {/* Flex container for left and right sections */}
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          {/* Left Side (Title, Image URL, Link) */}
          <div className="flex-1 space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-lg font-semibold text-gray-800"
              >
                Project Title
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500"
                placeholder="Enter project title"
                required
              />
            </div>

            <div>
              <label
                htmlFor="image"
                className="block text-lg font-semibold text-gray-800"
              >
                Image URL
              </label>
              <input
                id="image"
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500"
                placeholder="Enter image URL"
                required
              />
            </div>

            <div>
              <label
                htmlFor="link"
                className="block text-lg font-semibold text-gray-800"
              >
                Project Link
              </label>
              <input
                id="link"
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500"
                placeholder="Enter project link"
                required
              />
            </div>
          </div>

          {/* Right Side (Description and Skills) */}
          <div className="flex-1 space-y-6">
            <div>
              <label className="block text-lg font-semibold text-gray-800">
                Project Description
              </label>
              <div className="space-y-2">
                {description.map((desc, index) => (
                  <input
                    key={index}
                    type="text"
                    value={desc}
                    onChange={(e) =>
                      handleDescriptionChange(index, e.target.value)
                    }
                    className="w-full p-3 rounded-lg border border-gray-300 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500"
                    placeholder={`Description line ${index + 1}`}
                    required
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-800">
                Skills
              </label>
              <div className="space-y-2">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <input
                      type="text"
                      value={skill}
                      onChange={(e) => handleSkillChange(index, e.target.value)}
                      className="flex-1 p-3 rounded-lg border border-gray-300 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500"
                      placeholder={`Skill ${index + 1}`}
                      required
                    />
                    {skills.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeSkill(index)}
                        className="text-red-500 hover:text-red-700 font-bold"
                      >
                        X
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addSkill}
                  className="mt-2 text-fuchsia-600 hover:text-fuchsia-700 font-semibold"
                >
                  + Add Skill
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="py-3 px-8 bg-fuchsia-950 text-white rounded-lg hover:bg-fuchsia-800 font-bold"
          >
            Add Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProjectForm;
