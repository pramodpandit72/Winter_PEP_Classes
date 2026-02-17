import { useState } from "react";
import API from "../configs/api.js";

function ConfessionForm({ refresh }) {
  const [text, setText] = useState("");
  const [secretCode, setSecretCode] = useState("");

  const submitConfession = async () => {
    if (secretCode.length < 4) {
      alert("Secret code must be at least 4 characters");
      return;
    }

    await fetch(`${API}/confessions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ text, secretCode }),
    });

    setText("");
    setSecretCode("");
    refresh();
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <textarea
        className="w-full border p-2 mb-2"
        placeholder="Write your confession..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="password"
        className="w-full border p-2 mb-2"
        placeholder="Secret Code"
        value={secretCode}
        onChange={(e) => setSecretCode(e.target.value)}
      />
      <button
        onClick={submitConfession}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Post Confession
      </button>
    </div>
  );
}

export default ConfessionForm;