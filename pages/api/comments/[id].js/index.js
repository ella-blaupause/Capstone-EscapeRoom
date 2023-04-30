import dbConnect from "../../../../db/connect";
import Comment from "../../../../db/models/Comment";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const comment = await Comment.findById(id);

    if (!comment) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(place);
  }

  if (request.method === "PATCH") {
    const commentToUpdate = await Place.findByIdAndUpdate(id, {
      $set: request.body,
    });

    return response.status(200).json(commentToUpdate);
  }

  if (request.method === "DELETE") {
    const commentToDelete = await Place.findByIdAndDelete(id);
    return response.status(200).json(commentToDelete);
  }
}
