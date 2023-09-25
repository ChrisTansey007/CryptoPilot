app.post("/api/users/register", async (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }
  const hashedPassword = await bcrypt.hash(req.body.password, 8);
  db.run(
    `INSERT INTO users(username, password) VALUES(?,?)`,
    [req.body.username, hashedPassword],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      return res.status(201).json({ id: this.lastID });
    }
  );
});

app.post("/api/users/login", (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }
  db.get(
    `SELECT * FROM users WHERE username = ?`,
    [req.body.username],
    async (err, row) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (!row) {
        return res.status(400).json({ error: "Invalid username or password" });
      }
      const isPasswordValid = await bcrypt.compare(
        req.body.password,
        row.password
      );
      if (!isPasswordValid) {
        return res.status(400).json({ error: "Invalid username or password" });
      }
      const token = jwt.sign({ id: row.id }, "your-secret-key", {
        expiresIn: "1h",
      });
      return res.json({ token });
    }
  );
});
