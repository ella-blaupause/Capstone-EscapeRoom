import styled from "styled-components";
import { useSession } from "next-auth/react";

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const StyledDeletButton = styled.button`
  border: none;
  background-color: var(--my-orange);
  border-radius: 999px;
  width: 2em;
  height: 2em;
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledCommentar = styled.p`
  width: 250px;
`;

export default function Comment({ children, onDelete, id }) {
  const { data: session } = useSession();
  return (
    <StyledSection>
      <StyledCommentar>{children}</StyledCommentar>
      <StyledDeletButton
        disabled={!session}
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        x
      </StyledDeletButton>
    </StyledSection>
  );
}
