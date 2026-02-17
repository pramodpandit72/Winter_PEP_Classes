import API from "../configs/api.js";

function ConfessionCard({ confession, refresh }) {
  const react = async (type) => {
    await fetch(`${API}/confessions/${confession._id}/react`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type }),
    });
    refresh();
  };

  const editConfession = async () => {
    const code = prompt("Enter secret code:");
    const newText = prompt("Enter new confession text:");

    await fetch(`${API}/confessions/${confession._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secretCode: code, text: newText }),
    });

    refresh();
  };

  const deleteConfession = async () => {
    const code = prompt("Enter secret code:");

    await fetch(`${API}/confessions/${confession._id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secretCode: code }),
    });

    refresh();
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <p className="mb-3">{confession.text}</p>

      <div className="flex gap-4 mb-3">
        <button onClick={() => react("like")}>👍 {confession.reactions.like}</button>
        <button onClick={() => react("love")}>❤️ {confession.reactions.love}</button>
        <button onClick={() => react("laugh")}>😂 {confession.reactions.laugh}</button>
      </div>

      <div className="flex gap-4 text-sm">
        <button onClick={editConfession} className="text-blue-500">
          Edit
        </button>
        <button onClick={deleteConfession} className="text-red-500">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ConfessionCard;