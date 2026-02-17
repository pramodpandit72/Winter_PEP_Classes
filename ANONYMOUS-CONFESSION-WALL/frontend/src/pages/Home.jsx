
function Home() {

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default Home;




// import { useEffect, useState } from "react";
// import API from "../configs/api.js";
// import Login from "../components/Login";
// import ConfessionForm from "../components/ConfessionForm";
// import ConfessionCard from "../components/ConfessionCard";

// function Home() {
//   const [confessions, setConfessions] = useState([]);

//   const fetchConfessions = async () => {
//     const res = await fetch(`${API}/confessions`);
//     const data = await res.json();
//     setConfessions(data);
//   };

//   useEffect(() => {
//     fetchConfessions();
//   }, []);

//   return (
//     <div className="max-w-xl mx-auto p-4">
//       <h1 className="text-3xl font-bold text-center mb-4">
//         Anonymous Confession Wall
//       </h1>

//       <Login />
//       <ConfessionForm refresh={fetchConfessions} />

//       {confessions.map((c) => (
//         <ConfessionCard
//           key={c._id}
//           confession={c}
//           refresh={fetchConfessions}
//         />
//       ))}
//     </div>
//   );
// }

// export default Home;