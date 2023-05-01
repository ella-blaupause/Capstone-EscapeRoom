import styled from "styled-components";
import useSWR from "swr";
import Comment from "../Comment";

const StyledList = styled.ul`
  list-style-type: none;
  display: grid;
  gap: 1rem;
  justify-items: center;
  padding: 0;
`;

export default function CommentsList() {
  const { data, isLoading } = useSWR("/api/comments");
  console.log(data);

  if (!data) return;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  async function handleDeleteComment(id) {
    console.log(id);
    const response = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      await response.json();
    } else {
      console.error(`Error: ${response.status}`);
    }
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
