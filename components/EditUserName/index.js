import useSWRMutation from "swr/mutation";
import useGlobalStore from "../../store";

export default function EditUserName() {
  const { trigger, isMutating } = useSWRMutation(`/api/users`, updateUserName);
  const setUserEditMode = useGlobalStore((state) => state.setUserEditMode);

  async function updateUserName(url, { arg }) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(arg),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      await response.json();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  async function handleEditName(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData);
    await trigger(userData);
    setUserEditMode(false);
  }
  if (isMutating) {
    return <h1>Submitting your changes.</h1>;
  }
  return (
    <div>
      <h3>Spielername</h3>

      <form onSubmit={handleEditName}>
        <label htmlFor="userName">Gebe deinen neuen Spielername ein: </label>
        <input name="userName" id="userName" required />
        <button type="submit">Ok</button>
      </form>
    </div>
  );
}
