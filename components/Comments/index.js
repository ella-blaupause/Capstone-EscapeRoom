export default function Comments() {
  function handleCommentsSubmint() {}
  return (
    <form onSubmit={handleCommentsSubmint}>
      <label htmlFor="comments">Gib mir ein Kommentar:</label>
      <br />
      <input name="comments" id="comments" required></input>
      <button type="submit">Ok</button>
    </form>
  );
}
