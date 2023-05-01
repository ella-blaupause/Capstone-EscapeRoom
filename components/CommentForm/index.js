import useSWR from "swr";

export default function CommentForm({ inputCommentRef }) {
  const comments = useSWR("/api/comments");

  async function handleCommentSubmint(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const commentData = Object.fromEntries(formData);
    console.log(commentData);

    const response = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    });

    if (response.ok) {
      await response.json();
      comments.mutate();
      event.target.reset();
    } else {
      console.error(response.status);
    }
  }
  return (
    <form onSubmit={handleCommentSubmint}>
      <label htmlFor="comment">Gib mir ein Kommentar:</label>
      <br />
      <input ref={inputCommentRef} name="comment" id="comment" required></input>
      <button type="submit">Ok</button>
    </form>
  );
}
