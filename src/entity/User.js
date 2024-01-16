class User {
  constructor(name, email, password, confirmPassword) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }
}

class InfoAboutBootcampForUser {
  constructor(user, reachBootcamp) {
    this.user = user;
    this.reachBootcamp = reachBootcamp;
  }
}

// Basit bir örnek API
const userApi = {
  getUserData: async () => {
    // Burada aslında bir API'ye bağlanabilirsiniz.
    // Ancak bu örnekte basitçe bir Promise kullanıyorum.
    return new Promise((resolve) => {
      setTimeout(() => {
        const userData = {
          name: "John Doe",
          email: "john.doe@example.com",
          password: "password123",
          confirmPassword: "password123",
        };
        resolve(new User(userData.name, userData.email, userData.password, userData.confirmPassword));
      }, 1000);
    });
  },

  getBootcampInfo: async (user) => {
    // Burada da aslında bir API'ye bağlanabilirsiniz.
    // Ancak bu örnekte basitçe bir Promise kullanıyorum.
    return new Promise((resolve) => {
      setTimeout(() => {
        const reachBootcamp = true; // Örnek bir bootcamp bilgisi
        resolve(new InfoAboutBootcampForUser(user, reachBootcamp));
      }, 1000);
    });
  },
};

// Kullanıcı bilgilerini al ve devamında bootcamp bilgilerini al
