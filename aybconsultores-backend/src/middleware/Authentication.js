const jwt = require("jsonwebtoken")

exports.generateToken = () => {
  return 'token'
}

exports.verifyToken = (req, res, next) => {
  let token = (req.headers.token || [""])[0]
  jwt.verify(token, process.env.SEED || 'kimera', (err, decoded) => {
    if(err) {
      return res.status(401).json({
        ok: false,
        mensaje: 'Token inválido',
        error: err
      })
    }
    next()
  })
}
