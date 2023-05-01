import dbConnect from "../../../../db/connect";
import Comment from "../../../../db/models/Comment";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "DELETE") {
    const { id } = request.query;
    const commentToDelete = await Comment.findByIdAndDelete(id);

    return response.status(200).json(commentToDelete);
  }
}
