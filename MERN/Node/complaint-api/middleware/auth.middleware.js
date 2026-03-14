const auth = (req, res, next) => {
  console.log("Auth checked");

  const token = req.headers["authorization"];

  if (!token || token !== "secret123") {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};

export default auth;
