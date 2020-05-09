var jwt = require("jsonwebtoken");

const JWT_SIGN_SECRET =
  "iegzjpfp0993NjPDjdpojpJ093NknjNfon3IPndond3D3JNdonnoD3D3";

module.exports = {
  generateTokenForUser: function(userData) {
    return jwt.sign(
      {
        pseudo: userData.pseudo
      },
      JWT_SIGN_SECRET,
      {
        expiresIn: "1h"
      }
    );
  },
  parseAuthorization: function(authorization) {
    return authorization != null ? authorization.replace("Bearer ", "") : null;
  },
  getUserId: function(authorization) {
    userData = -1;
    var token = module.exports.parseAuthorization(authorization);
    if (token != null) {
      try {
        var jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
        if (jwtToken != null) {
          userData = jwtToken.userData;
        }
      } catch (err) {}
    }
    return userData;
  }
};
