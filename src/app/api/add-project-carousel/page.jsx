"use client"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {

  const handleAddProject = async(event) => {
    event.preventDefault()
    const newProject = {
      text: event.target.text.value,
      image: event.target.image.value,
    }
    console.log(newProject);
    const res = await fetch('http://localhost:3000/projects-data/api/add-carousel',{
      method: 'POST',
      body: JSON.stringify(newProject),
      headers: {
        "content-type": "application/json"
      }
    })
    if(res.status === 200){
      event.target.reset()
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
  }

    return (
      <div className="flex items-center justify-center pt-28 pb-12">
        <div className="bg-gray-100 rounded-lg shadow-lg p-8 max-w-xl w-full">
          <h2 className="text-2xl font-bold text-center mb-6">Add Project Form</h2>
          <form onSubmit={handleAddProject}>
            {/* Text Input Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Carousel Title
              </label>
              <input
              name="text"
                type="text"
                placeholder="Type something..."
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
  
            {/* Image URL Input Field */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Carousel Image URL
              </label>
              <input
              name="image"
                type="text"
                placeholder="Enter image URL..."
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
  
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Page;
  