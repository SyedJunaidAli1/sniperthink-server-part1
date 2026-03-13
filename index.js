import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(cors({ origin: process.env.NEXT_PUBLIC_CLIENT }));
app.use(express.json());

app.post("/api/interest", (req, res) => {
  const { name, email, step } = req.body;

  if (!name || !email || !step) {
    return res.status(400).json({
      message: "Missing required fields",
    });
  }

  console.log("Interest received:", {
    name,
    email,
    step,
  });

  return res.json({
    message: "Interest recorded successfully",
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
