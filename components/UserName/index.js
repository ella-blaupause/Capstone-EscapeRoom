import useProfileStore from "../../stores/profileStore";

export default function UserName() {
  const userName = useProfileStore((state) => state.userName);
  const chooseUserName = useProfileStore((state) => state.chooseUserName);
  const resetUserName = useProfileStore((state) => state.resetUserName);

  function handleUserName(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    chooseUserName(data);
  }

  function handleClick() {
    resetUserName();
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
          <label htmlFor="userName">Gebe deinen Spielername ein: </label>
          <input name="userName" id="userName" required />
          <button type="submit">Ok</button>
        </form>
      )}
    </>
  );
}
