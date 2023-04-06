// TODO: setup Express backend to handle firebase auth properly for jwt token generation

// export default {
//     setUser(state, payload) {
//         state.userId = payload.userId;
//         state.token = payload.token;
//         state.isAuthenticated = true;
//     }
// };

export default {
    setUserAuth(state, payload) {
        state.isLoggedIn = payload.loggedIn;
        console.log('user auth state changed to:', payload.loggedIn);
    }
};