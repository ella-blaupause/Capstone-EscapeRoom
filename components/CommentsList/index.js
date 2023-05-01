import styled from "styled-components";
import useSWR from "swr";
import Comment from "../Comment";

const StyledList = styled.ul`
  list-style-type: none;
  display: grid;
  gap: 1rem;
  justify-items: center;
  padding: 0 0 100px 0;
`;

export default function CommentsList({ inputCommentRef }) {
  const { data, isLoading, mutate } = useSWR("/api/comments");

  if (!data) return;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  async function handleDeleteComment(id) {
    const response = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      await response.json();
      const newData = data.filter((comment) => comment._id !== id);

      await mutate(newData, false);
    } else {
      console.error(`Error: ${response.status}`);
    }

    inputCommentRef.current.focus();
  }

  return (
    <>
      <h4>Kommentare:</h4>

      <StyledList>
        {data.map((comment, index) => (
          <li key={comment._id}>
            <Comment onDelete={handleDeleteComment} id={comment._id}>
              {data[index].comment}
            </Comment>
          </li>
        ))}
      </StyledList>
    </>
  );
}
