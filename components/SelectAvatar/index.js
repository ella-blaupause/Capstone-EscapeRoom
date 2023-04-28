import Image from "next/image";
import { avatars } from "../../utils/utils";
import { useState } from "react";
import styled from "styled-components";
import useProfileStore from "../../stores/profileStore";

const StyledAvatarDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledAvatarImage = styled(Image)`
  border-radius: 100px;
`;

export default function SelectAvatar() {
  const avatar = useProfileStore((state) => state.avatar);
  const chooseAvatar = useProfileStore((state) => state.chooseAvatar);

  function handleAvatarChange(event) {
    event.preventDefault();
    const selectedAvatarId = parseInt(event.target.value);
    const selectedAvatar = avatars.find(
      (avatar) => avatar.id === selectedAvatarId
    );

    chooseAvatar(selectedAvatar);
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
      <StyledAvatarImage
        src={avatar.src}
        width={120}
        height={120}
        alt="avatar"
        priority
      />
    </StyledAvatarDiv>
  );
}
