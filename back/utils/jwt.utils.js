var jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = 'iegzjpfp0993NjPDjdpojpJ093NknjNfon3IPndond3D3JNdonnoD3D3';

module.exports = {
  generateTokenForUser: function(userData){
    return jwt.sign({
        pseudo: userData.pseudo
    },
    JWT_SIGN_SECRET,
    {
        expiresIn : '1h'
    })
  }  
}
