import { useState } from "react";

export default function UserName() {
  const [userData, setUserData] = useState();
  function handleUserName(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    setUserData(data);
  }

  return (
    <>
      {userData ? (
        <h2>{userData.userName}</h2>
      ) : (
        <form onSubmit={handleUserName}>
          <label htmlFor="userName">Gebe deinen Spielername ein: </label>
          <input name="userName" id="userName" required />
          <button type="submit">Ok</button>
        </form>
      )}
    </>
  );
}
