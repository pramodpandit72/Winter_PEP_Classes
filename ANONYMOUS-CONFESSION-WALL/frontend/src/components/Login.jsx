function Login() {
  const handleLogin = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  return (
    <div className="text-center my-6">
      <button
        onClick={handleLogin}
        className="bg-red-500 text-white px-6 py-2 rounded font-bold"
      >
        Login with Google
      </button>
    </div>
  );
}

export default Login;