import useSWR from "swr";
import { useSession } from "next-auth/react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  margin: 0 45px;
`;

export default function CommentForm({ inputCommentRef }) {
  const { data: session } = useSession();
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
  return session ? (
    <form onSubmit={handleCommentSubmint}>
      <label htmlFor="comment">Gib mir ein Kommentar:</label>
      <br />
      <input ref={inputCommentRef} name="comment" id="comment" required />
      <button type="submit">Ok</button>
    </form>
  ) : (
    <StyledParagraph>
      Einlogen, um einen Kommentar zu hinterlassen.
    </StyledParagraph>
  );
}
