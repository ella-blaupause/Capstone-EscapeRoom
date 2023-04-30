import useGlobalStore from "../../store";
import useSWR from "swr";

export default function UserName() {
  const users = useSWR("/api/users");

  const userEdit = useGlobalStore((state) => state.userEdit);
  const boolUserEdit = useGlobalStore((state) => state.boolUserEdit);

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
      users.mutate();
      event.target.reset();
    } else {
      console.error(response.status);
    }

    chooseUserName(userData);
  }

  function handleClick() {
    toggleUserEdit();
  }
  console.log(userEdit);
  console.log(users.data.length);

  if (users.data.length === 0) {
    return (
      <form onSubmit={handleUserName}>
        <label htmlFor="userName">Gebe deinen Spielername ein: </label>
        <input name="userName" id="userName" required />
        <button type="submit">Ok</button>
      </form>
    );
  }

  return (
    <div>
      <h3>Spielername</h3>
      <p>{users.data[0].userName}</p>
      <button type="button" onClick={handleClick}>
        Name ändern
      </button>
    </div>
  );

  /* return (
    <>
      {userName ? (
        <div>
          <h2>{users.data[0].userName}</h2>
          <button type="button" onClick={handleClick}>
            Name ändern
          </button>
        </div>
      ) : (
        <form onSubmit={handleUserName}>
          <label htmlFor="userName">Gebe deinen Spielername ein: </label>
          <input name="userName" id="userName" required />
          <button type="submit">Ok</button>
        </form>
      )}
    </>
  ); */
}
