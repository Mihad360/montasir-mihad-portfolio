export const getCarousel = async () =>{
    const res = await fetch('http://localhost:3000/projects-data/api/get-carousel')
    const data = res.json()
    return data
}

export const getProjects = async () =>{
    const res = await fetch('http://localhost:3000/projects-data/api/get-projects')
    const data = res.json()
    return data
}