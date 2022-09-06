import axios from 'axios';

function register(username, password) {
    return axios.post(process.env.REACT_APP_API + 'auth/register',
        {
            username: username,
            password: password
        }).then(response => console.log(response));
}

function login(username, password) {
    return axios.post(process.env.REACT_APP_API + 'auth/login',
    {
        username: username,
        password: password
    }).then(response => response.data);
}

const AuthService = {
    register,
    login
}

export default AuthService;