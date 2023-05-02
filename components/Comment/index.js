import styled from "styled-components";
import { useSession } from "next-auth/react";
import { darkTheme, lightTheme } from "../../utils/utils";
import useGlobalStore from "../../store";

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const StyledDeletButton = styled.button`
  border: none;
  background-color: ${(prop) =>
    prop.isDarkMode ? darkTheme.highlight : lightTheme.highlight};
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
  const isDarkMode = useGlobalStore((state) => state.isDarkMode);
  const { data: session } = useSession();
  return (
    <StyledSection>
      <StyledCommentar>{children}</StyledCommentar>
      <StyledDeletButton
        isDarkMode={isDarkMode}
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
