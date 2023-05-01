export default function Comment({ children, onDelete, id }) {
  return (
    <section>
      <p>{children}</p>
      <button
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        ❌
      </button>
    </section>
  );
}
