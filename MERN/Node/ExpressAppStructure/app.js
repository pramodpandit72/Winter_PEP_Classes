import express from "express";
import userRoutes from "./routes/user.routes.js";
import logger from "./middleware/logger.middleware.js";


const app = express();

app.use(express.json());
app.use(logger);
app.use("/users", userRoutes);

export default app;