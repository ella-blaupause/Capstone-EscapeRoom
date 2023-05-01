import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Hallo {session.user.name} <br />
        <button onClick={() => signOut()}>Ausloggen</button>
      </>
    );
  }
  return (
    <>
      Du bist nicht eingeloggt.
      <br />
      <button onClick={() => signIn()}>Einloggen</button>
    </>
  );
}
