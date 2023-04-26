import Image from "next/image";
import { avatars } from "../../utils/utils";
import { useState } from "react";
import styled from "styled-components";

const StyledAvatarDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default function SelectAvatar() {
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);
  function handleAvatarChange(event) {
    event.preventDefault();
    const selectedAvatarId = parseInt(event.target.value);
    const selectedAvatar = avatars.find(
      (avatar) => avatar.id === selectedAvatarId
    );

    setSelectedAvatar(selectedAvatar);
  }

  return (
    <StyledAvatarDiv>
      <form>
        <label htmlFor="avatars">Avatar: </label>
        <select name="avatars" id="avatars" onChange={handleAvatarChange}>
          {avatars.map((avatar) => {
            return (
              <option key={avatar.id} value={avatars.id}>
                {avatar.id}
              </option>
            );
          })}
        </select>
      </form>
      <Image src={selectedAvatar.src} width={120} height={120} alt="avatar" />
    </StyledAvatarDiv>
  );
}
