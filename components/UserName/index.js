import useSWR from "swr";
import LogginButton from "../LogginButton";

export default function UserName() {
  const { data, isLoading } = useSWR("/api/users");

  async function handleUserName(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData);

    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      await response.json();
      data.mutate();
      event.target.reset();
    } else {
      console.error(response.status);
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h3>Spielername</h3>
      <LogginButton />
    </div>
  );
}
