// Authentication service
const API_URL = 'http://localhost:3000/accounts'

class AuthService {
    login(user) {
        return fetch(API_URL, {
            method: "POST",
            body: {
                username: user.username,
                password: user.password
            }
        })
        .then(response => {
            if (response.formData.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        });
    }

    logout() {
        localStorage.removeItem('user');
    }


}