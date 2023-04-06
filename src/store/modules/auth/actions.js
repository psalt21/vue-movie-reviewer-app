export default {
    login(context) {
        // temporary workaround to get auth working
        context.commit('setUserAuth', { loggedIn: true });
    },
    signup(context) {
        context.commit('setUserAuth', { loggedIn: true });

        // see this link for documentation to setup correctly

        // const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API_Key found in .env.local]", {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         token: payload.token,
        //         returnSecureToken: true
        //     })
        // });
        // const responseData = await response.json();

        // if (!response.ok) {
        //     console.log(responseData);
        //     const error = new Error(responseData.message || 'Failed to authenticate.');
        //     throw error;
        // }

        // console.log(responseData);

        // context.commit('setUser', {
        //     token: responseData.idToken,
        //     userId: responseData.localId,
        //     tokenExpiration: responseData.expiresIn
        // });

        // currently not using the most current and correct way to send a request to firebase
        // I will just pretend auth is setup using the vuex global state
    },
    logout(context) {
        context.commit('setUserAuth', { loggedIn: false });
    }
};