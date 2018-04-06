const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET || 'JWT_~secret*\\key'

function sign(userId) {
  //const token = jwt.sign({ id: userId })
  //jwt.sign(payload, secretOrPrivateKey, [options, callback])
  const token = jwt.sign( {
    id: userId },
    'secret',
    { expiresIn: 3600 * 3} )
    return token
}

function verify(token, callback) {
  jwt.verify(token, 'secret', callback)
  //console.log("--------- Verify function");
  //console.log(`Token = ${token}`);
  //console.log(`Secret = ${secret}`);
}

module.exports = { sign, verify }
