import { connectDb } from "@/app/lib/connectDb";

export const POST = async(request)=>{
    const newProject = await request.json()
    const db = await connectDb()
    const projectsCollection = db.collection('projects')
    try {
        await projectsCollection.insertOne(newProject);
        return Response.json({message: 'Project added successfully', status: 200})
    } catch (error) {
        console.log(error);
        return Response.json({message: 'something went wrong'}, {status: 400})
    }
}