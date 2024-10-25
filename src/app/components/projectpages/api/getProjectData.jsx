import axios from "axios";

export const getCarousel = async () => {
  try {
    const res = await axios.get(
      'https://montasir-mihad-portfolio-server.vercel.app/project-carousel'
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getProjects = async () => {
  try {
    const res = await axios.get(
      'https://montasir-mihad-portfolio-server.vercel.app/projects'
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
