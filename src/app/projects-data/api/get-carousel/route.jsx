import { connectDb } from "@/app/lib/connectDb"

export const GET = async()=>{
    const db = await connectDb()
    const projectCarouselCollection = db.collection('project-carousel')
    try {
        const carousel = await projectCarouselCollection.find().toArray();
        return Response.json(carousel)
    } catch (error) {
        console.log(error);
    }
}