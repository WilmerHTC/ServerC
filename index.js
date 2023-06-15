import app from "./app/app.js";

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
