import Link from "next/link";
import styled from "styled-components";
import CrosswordLayout from "../components/CrosswordLayout/CrosswordLayout";

const StyldedDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 1fr;
`;

export default function Crossword() {
  return (
    <>
      <Link href={"/"}>
        <button>⬅️</button>
      </Link>
      <h2>Kreuzwort</h2>
      <StyldedDiv>
        <CrosswordLayout />
      </StyldedDiv>
    </>
  );
}
