import Image from "next/image";
import { avatars } from "../../utils/utils";

export default function SelectAvatar() {
  return (
    <>
      <form>
        <label htmlFor="avatars">Avatar</label>
        <select name="avatars" id="avatars">
          <option value={"avatar-1"}>
            <Image src={avatars[0].src} width={12} height={12} alt="avatar" />
          </option>
        </select>
      </form>
      <Image src={avatars[0].src} width={120} height={120} alt="avatar" />
    </>
  );
}
