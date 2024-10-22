import { connectDb } from "@/app/lib/connectDb";

export const GET = async()=>{
    const db = await connectDb()
    const projectsCollection = db.collection('projects')
    try {
        const projects = await projectsCollection.find().toArray();
        return Response.json(projects)
    } catch (error) {
        console.log(error);
    }
}