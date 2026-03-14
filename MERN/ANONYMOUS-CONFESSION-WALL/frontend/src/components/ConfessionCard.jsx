import { useState } from "react";
import API from "../configs/api.js";

function ConfessionCard({ confession, refresh, currentUser }) {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [secretCode, setSecretCode] = useState("");
  const [newText, setNewText] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [commentLoading, setCommentLoading] = useState(false);

  const isOwner = currentUser && currentUser.id === confession.userId;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  const react = async (type) => {
    if (!currentUser) {
      alert("Please sign in to react to confessions");
      return;
    }
    try {
      const response = await fetch(`${API}/confessions/${confession._id}/react`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ type }),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Reaction failed");
      }
      refresh();
    } catch (err) {
      console.error("Reaction failed:", err);
      alert(err.message || "Failed to add reaction");
    }
  };

  const openEditModal = () => {
    setModalType("edit");
    setNewText(confession.text);
    setSecretCode("");
    setError("");
    setShowModal(true);
  };

  const openDeleteModal = () => {
    setModalType("delete");
    setSecretCode("");
    setError("");
    setShowModal(true);
  };

  const handleSubmit = async () => {
    if (!secretCode) {
      setError("Please enter your secret code");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const url = `${API}/confessions/${confession._id}`;
      const options = {
        method: modalType === "edit" ? "PUT" : "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(
          modalType === "edit"
            ? { secretCode, text: newText }
            : { secretCode }
        ),
      };

      const response = await fetch(url, options);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Operation failed");
      }

      setShowModal(false);
      refresh();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddComment = async () => {
    if (!newComment.trim()) return;
    if (!currentUser) {
      alert("Please sign in to comment");
      return;
    }
    
    setCommentLoading(true);
    try {
      const response = await fetch(`${API}/confessions/${confession._id}/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ text: newComment }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to add comment");
      }

      setNewComment("");
      refresh();
    } catch (err) {
      console.error("Comment failed:", err);
      alert(err.message || "Failed to add comment");
    } finally {
      setCommentLoading(false);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      const response = await fetch(`${API}/confessions/${confession._id}/comment/${commentId}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to delete comment");
      }

      refresh();
    } catch (err) {
      console.error("Delete comment failed:", err);
    }
  };

  const formatCommentDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-4 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
        {/* Confession Text */}
        <p className="text-gray-800 dark:text-gray-200 text-lg mb-4 leading-relaxed">
          {confession.text}
        </p>

        {/* Date */}
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">
          {formatDate(confession.createdAt)}
        </p>

        {/* Reactions */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => react("like")}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all duration-300"
          >
            <span>👍</span>
            <span className="font-semibold">{confession.reactions.like}</span>
          </button>
          <button
            onClick={() => react("dislike")}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-50 dark:bg-gray-900/20 text-gray-600 dark:text-gray-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900/40 transition-all duration-300"
          >
            <span>👎</span>
            <span className="font-semibold">{confession.reactions.dislike || 0}</span>
          </button>
          <button
            onClick={() => react("love")}
            className="flex items-center space-x-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-full hover:bg-red-100 dark:hover:bg-red-900/40 transition-all duration-300"
          >
            <span>❤️</span>
            <span className="font-semibold">{confession.reactions.love}</span>
          </button>
          <button
            onClick={() => react("laugh")}
            className="flex items-center space-x-2 px-4 py-2 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 rounded-full hover:bg-yellow-100 dark:hover:bg-yellow-900/40 transition-all duration-300"
          >
            <span>😂</span>
            <span className="font-semibold">{confession.reactions.laugh}</span>
          </button>
          <button
            onClick={() => setShowComments(!showComments)}
            className="flex items-center space-x-2 px-4 py-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-all duration-300"
          >
            <span>💬</span>
            <span className="font-semibold">{confession.comments?.length || 0}</span>
          </button>
        </div>

        {/* Comments Section */}
        {showComments && (
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
            {/* Add Comment */}
            {currentUser ? (
              <div className="flex gap-2 mb-4">
                <div className="flex-shrink-0">
                  {currentUser.photo ? (
                    <img
                      src={currentUser.photo}
                      alt={currentUser.displayName}
                      className="w-8 h-8 rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {currentUser.displayName?.charAt(0)?.toUpperCase() || "U"}
                      </span>
                    </div>
                  )}
                </div>
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleAddComment()}
                  placeholder="Add a comment..."
                  className="flex-1 border border-gray-200 dark:border-gray-600 rounded-full px-4 py-2 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
                />
                <button
                  onClick={handleAddComment}
                  disabled={commentLoading || !newComment.trim()}
                  className="cursor-pointer px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {commentLoading ? "..." : "Comment"}
                </button>
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 text-center">
                Please login to add a comment
              </p>
            )}

            {/* Comments List */}
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {confession.comments?.length > 0 ? (
                confession.comments.map((comment) => (
                  <div key={comment._id} className="flex gap-2 group">
                    <div className="flex-shrink-0">
                      {comment.userPhoto ? (
                        <img
                          src={comment.userPhoto}
                          alt={comment.userName}
                          className="w-8 h-8 rounded-full"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            {comment.userName?.charAt(0)?.toUpperCase() || "A"}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl px-4 py-2">
                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                          {comment.userName}
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          {comment.text}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 mt-1 px-2">
                        <span className="text-xs text-gray-400">
                          {formatCommentDate(comment.createdAt)}
                        </span>
                        {currentUser && currentUser.id === comment.userId && (
                          <button
                            onClick={() => handleDeleteComment(comment._id)}
                            className="text-xs text-red-500 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            Delete
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 dark:text-gray-400 text-sm text-center py-2">
                  No comments yet. Be the first to comment!
                </p>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons - Only show edit/delete if user is owner */}
        {isOwner && (
          <div className="flex gap-3 pt-3 border-t border-gray-100 dark:border-gray-700">
            <button
              onClick={openEditModal}
              className="flex items-center space-x-1 text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <span>Edit</span>
            </button>
            <button
              onClick={openDeleteModal}
              className="flex items-center space-x-1 text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <span>Delete</span>
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6 animate-scale-in">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              {modalType === "edit" ? "✏️ Edit Confession" : "🗑️ Delete Confession"}
            </h3>

            {modalType === "edit" && (
              <textarea
                className="w-full border border-gray-200 dark:border-gray-600 rounded-xl p-4 mb-4 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
                rows={4}
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                placeholder="Edit your confession..."
              />
            )}

            {modalType === "delete" && (
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Are you sure you want to delete this confession? This action cannot be undone.
              </p>
            )}

            <div className="relative mb-4">
              <input
                type="password"
                className="w-full border border-gray-200 dark:border-gray-600 rounded-xl p-4 pl-12 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
                placeholder="Enter your secret code"
                value={secretCode}
                onChange={(e) => setSecretCode(e.target.value)}
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                🔑
              </span>
            </div>

            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-lg mb-4 text-sm">
                {error}
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-3 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className={`flex-1 px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center ${
                  modalType === "edit"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                    : "bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isLoading ? (
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : (
                  modalType === "edit" ? "Save Changes" : "Delete"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ConfessionCard;