import { connectDb } from "@/app/lib/connectDb";

export const POST = async(request)=>{
    const project = await request.json()
    const db = await connectDb()
    const projectCarouselCollection = db.collection('project-carousel')
    try {
        await projectCarouselCollection.insertOne(project);
        return Response.json({message: 'Added successfully', status: 200})
    } catch (error) {
        console.log(error);
        return Response.json({message: 'something went wrong'}, {status: 400})
    }
}