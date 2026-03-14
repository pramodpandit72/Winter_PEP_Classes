import { useState } from "react";
import API from "../configs/api.js";
import { useAuth } from "../context/AuthContext";

function ConfessionForm({ refresh }) {
  const { user } = useAuth();
  const [text, setText] = useState("");
  const [secretCode, setSecretCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const submitConfession = async (e) => {
    e.preventDefault();
    setError("");

    if (!text.trim()) {
      setError("Please write your confession");
      return;
    }

    if (secretCode.length < 4) {
      setError("Secret code must be at least 4 characters");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API}/confessions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ text, secretCode }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to post confession");
      }

      setText("");
      setSecretCode("");
      refresh();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!user) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8 border border-gray-100 dark:border-gray-700">
        <div className="text-center py-8">
          <div className="text-6xl mb-4">🔐</div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Login Required
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Please sign in with Google to post your anonymous confession
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8 border border-gray-100 dark:border-gray-700">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
        <span className="mr-2">✍️</span> Post Your Confession
      </h2>

      <form onSubmit={submitConfession}>
        <textarea
          className="w-full border border-gray-200 dark:border-gray-600 rounded-xl p-4 mb-4 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
          placeholder="Share your deepest confession... No one will know it's you 🤫"
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="relative mb-4">
          <input
            type="password"
            className="w-full border border-gray-200 dark:border-gray-600 rounded-xl p-4 pl-12 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
            placeholder="Secret Code (min 4 characters)"
            value={secretCode}
            onChange={(e) => setSecretCode(e.target.value)}
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            🔑
          </span>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
          ⚠️ Remember your secret code! You&apos;ll need it to edit or delete your confession.
        </p>

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Posting...</span>
            </>
          ) : (
            <>
              <span>🤫</span>
              <span>Post Anonymously</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default ConfessionForm;