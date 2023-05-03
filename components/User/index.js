import useSWR from "swr";
import LoginButton from "../LoginButton";

export default function User() {
  const { isLoading } = useSWR("/api/users");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h3>Spieler</h3>
      <LoginButton />
    </div>
  );
}
