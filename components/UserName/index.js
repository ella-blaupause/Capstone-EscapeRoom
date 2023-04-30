import useGlobalStore from "../../store";
import useSWR from "swr";
import EditUserName from "../EditUserName";

export default function UserName() {
  const { data, isLoading } = useSWR("/api/users");
  console.log(data);
  const isUserEditMode = useGlobalStore((state) => state.isUserEditMode);
  const setUserEditMode = useGlobalStore((state) => state.setUserEditMode);

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

  function handleEditMode() {
    setUserEditMode(true);
  }

  if (isUserEditMode) {
    return <EditUserName />;
  }

  if (data.length > 0) {
    return (
      <div>
        <h3>Spielername</h3>
        <p>{data[0].userName}</p>
        <button type="button" onClick={handleEditMode}>
          Name ändern
        </button>
      </div>
    );
  } else {
    return (
      <form onSubmit={handleUserName}>
        <label htmlFor="userName">Gebe deinen Spielername ein: </label>
        <input name="userName" id="userName" required />
        <button type="submit">Ok</button>
      </form>
    );
  }
}
