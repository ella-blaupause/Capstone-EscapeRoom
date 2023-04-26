import Image from "next/image";
import Header from "../components/Header";

export default function Profiler() {
  return (
    <>
      <Header>Profil</Header>
      <Image
        src="/../public/avatars/avatar-1.png"
        width={120}
        height={120}
        alt="avatar"
      />
    </>
  );
}
