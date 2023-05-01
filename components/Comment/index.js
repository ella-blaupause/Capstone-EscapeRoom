import styled from "styled-components";

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
  return (
    <StyledSection>
      <StyledCommentar>{children}</StyledCommentar>
      <StyledDeletButton
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
