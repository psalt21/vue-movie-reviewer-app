<template>
    <div class="header">
        <div  class="header__logo">
            <router-link to="/">
                <img src="../../assets/images/movie-reviewer-logo-192x192.png" alt="logo" width="75" />
            </router-link>
            <h2>Movie Reviewer</h2>
        </div>
        <div class="header__nav">
            <router-link to="/movie-search">Movie Search</router-link>
            <router-link to="/profile">Profile</router-link>
            <router-link to="/auth">Login/Signup</router-link>
        </div>
    </div>
</template>

<style>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background-color: lightblue;
    white-space: nowrap;
}

.header__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header__nav a {
    margin: 0 1rem;
    text-decoration: none;
    color: var(--color-heading);
}

.header__logo {
    display: flex;
    align-items: center;
    width: 40%;
    font-weight: bold;
}

.header__logo h2 {
    font-weight: 700;
}
</style>