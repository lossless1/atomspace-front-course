import express from "express";
const app = express();
const port = 4443;
// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
  const { query } = req;
  console.log(query);
  res.json({ hello: "hello world" });
});

app.get("/books", function (req, res) {
  const { query } = req;
  console.log(query);
  res.json({ books: "a lot" });
});
app.get("/books/:id", function (req, res) {
  const { query } = req;
  const { params } = req;

  console.log(params);

  console.log(query);
  res.json({ books: "a lot" });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

export default { express: true };
