import Link from "next/link";
import styled from "styled-components";
import CrosswordLayout from "../components/CrosswordLayout";

const StyldedDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 375px;
  height: 667px;
`;

export default function Crossword() {
  return (
    <>
      <Link href={"/"}>
        <button>⬅️</button>
      </Link>
      <StyldedDiv>
        <h2>Kreuzworträtsel</h2>
        <CrosswordLayout />
      </StyldedDiv>
    </>
  );
}
