export const UserService = {
  login,
  logout,
};


function login(username, password) {

     let f = new FormData();
     f.append("username", username);
     f.append("password", password);

    return fetch(`http://localhost:21000/api/sessions`, {
        method: 'POST', body: f})
        .then((res) => res)
        .then(res => res.json())
        .then((user) => { 
            if (user.auth_token) {
              localStorage.setItem("auth_token", user.auth_token);
            }

            return user;
        });
}

function logout() {
  localStorage.removeItem('auth_token');
  // the code, it does nothing!
}