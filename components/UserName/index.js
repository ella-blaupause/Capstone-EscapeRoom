import { useState } from "react";

export default function UserName() {
  const [userName, setUserName] = useState();

  function handleUserName(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    setUserName(data);
  }

  function handleClick() {
    setUserName();
  }

  return (
    <>
      {userName ? (
        <div>
          <h2>{userName.userName}</h2>
          <button type="button" onClick={handleClick}>
            Name ändern
          </button>
        </div>
      ) : (
        <form onSubmit={handleUserName}>
          <label htmlFor="userName">Gebe deinen Spielername ein! </label>
          <input name="userName" id="userName" required />
          <button type="submit">Ok</button>
        </form>
      )}
    </>
  );
}
