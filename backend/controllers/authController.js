const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const users = require("../users")

exports.signup = async (req, res) => {

  const { username, password } = req.body

  if (!username || !password) {
    return res.status(400).json({
      message: "Username and password required"
    })
  }

  const existing = users.find(u => u.username === username)

  if (existing) {
    return res.status(409).json({
      message: "User already exists"
    })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  users.push({
    username,
    password: hashedPassword
  })

  res.status(201).json({
    message: "User created"
  })

}

exports.login = async (req, res) => {

  const { username, password } = req.body

  const user = users.find(u => u.username === username)

  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials"
    })
  }

  const valid = await bcrypt.compare(password, user.password)

  if (!valid) {
    return res.status(401).json({
      message: "Invalid credentials"
    })
  }

  const token = jwt.sign({ username }, "secret", { expiresIn: "1h" })

  res.json({
    token,
    username
  })

}