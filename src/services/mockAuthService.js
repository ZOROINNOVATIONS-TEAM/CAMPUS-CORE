// Place this in src/services/mockAuthService.js

export const mockLogin = async (email, password, role) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a successful login for any credentials
      resolve({
        email,
        role,
        token: "mock-token-1234"
      });
    }, 1000);
  });
};

export const mockRegister = async (name, email, password, role) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a successful registration for any credentials
      resolve({
        name,
        email,
        role,
        token: "mock-token-5678"
      });
    }, 1200);
  });
};
