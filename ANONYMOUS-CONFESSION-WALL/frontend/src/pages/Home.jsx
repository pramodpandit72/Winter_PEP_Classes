import { useEffect, useState } from "react";
import API from "../configs/api.js";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ConfessionForm from "../components/ConfessionForm";
import ConfessionCard from "../components/ConfessionCard";
import Footer from "../components/Footer";

function Home() {
  const [confessions, setConfessions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchConfessions = async () => {
    try {
      const res = await fetch(`${API}/confessions`);
      const data = await res.json();
      setConfessions(data);
    } catch (error) {
      console.error("Error fetching confessions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConfessions();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />

      <main className="flex-grow max-w-3xl w-full mx-auto px-4 py-8">
        <ConfessionForm refresh={fetchConfessions} />

        {/* Confessions Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
            <span className="mr-2">📜</span> Recent Confessions
          </h2>

          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 animate-pulse"
                >
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
                  <div className="flex gap-2">
                    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-full w-16"></div>
                    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-full w-16"></div>
                    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-full w-16"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : confessions.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🤐</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                No confessions yet
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Be the first to share your secret!
              </p>
            </div>
          ) : (
            confessions.map((c) => (
              <ConfessionCard
                key={c._id}
                confession={c}
                refresh={fetchConfessions}
              />
            ))
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;