// User.js

class User {
  constructor(name, email, password, confirmPassword) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }
}

// Sınıfı dışa aktar
module.exports = User;
// User sınıfını içe aktar
//const User = require('./User');