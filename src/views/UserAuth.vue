<template>
    <form @submit.prevent="submitForm">
        <!-- <div v-if="mode === 'signup'" class="form-control" :class="{invalid: !username.isValid}">
            <label for="username">Username</label>
            <input
                type="text"
                id="username"
                placeholder="Enter username"
                v-model.trim="username.value"
                @blur="clearValidity('username')" 
            />
            <p v-if="!username.isValid">Username must be at least 5 characters in length.</p>
        </div> -->
        <div class="form-control" :class="{invalid: !email.isValid}">
            <label for="email">Email</label>
            <input
                type="text"
                id="email"
                placeholder="Enter email"
                v-model="email.value"
                @blur="clearValidity('email')" 
            />
            <p v-if="!email.isValid">Please enter a valid email.</p>
        </div>
        <div class="form-control" :class="{invalid: !password.isValid}">
            <label for="password">Password</label>
            <input
                type="password"
                id="password"
                placeholder="Enter password"
                v-model="password.value"
                @blur="clearValidity('password')"
            />
            <p v-if="!password.isValid">Please enter a valid password (at least 6 characters).</p>
        </div>
        <button>{{ submitButtonCaption }}</button>
        <button type="button" @click="switchAuthMode">{{ switchModeButtonCaption }}</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            // username: {
            //     value: '',
            //     isValid: true,
            //     required: false
            // },
            email: {
                value: '',
                isValid: true
            },
            password: {
                value: '',
                isValid: true
            },
            formIsValid: true,
            mode: 'login'
        }
    },
    computed: {
        submitButtonCaption() {
            return this.mode === 'login' ? 'Login' : 'Signup';
        },
        switchModeButtonCaption() {
            return this.mode === 'login' ? 'Signup Instead' : 'Login Instead';
        }
    },
    methods: {
        clearValidity(input) {
            this[input].isValid = true;
        },
        validateForm() {
            this.formIsValid = true;
            // if (this.mode === 'signup' &&
            //     this.username.value === '' ||
            //     this.username.value.length < 5) 
            // {
            //     this.username.isValid = false;
            //     this.formIsValid = false;
            // }
            if (this.email.value === '' || !this.email.value.includes('@')) {
                this.email.isValid = false;
                this.formIsValid = false;
            }
            if (this.password.value.length < 6) {
                this.password.isValid = false;
                this.formIsValid = false;
            }
        },
        submitForm() {
            this.validateForm();

            if (!this.formIsValid) {
                return;
            }

            // if (this.mode === 'login') {
            //     this.$store.dispatch('login');
            // } else {
            //     this.$store.dispatch('signup');
            // }
            
            // will call the same action for now for both login or signup scenarios
            this.$store.dispatch('login');

            this.$router.push('/');
        },
        switchAuthMode() {
            if (this.mode === 'login') {
                this.mode = 'signup';
            } else {
                this.mode = 'login';
            }
            this.clearValidity('email');
            this.clearValidity('password');
            // this.clearValidity('username');
        }
    }
};
</script>

<style scoped>
form {
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 2rem;
    margin: 2rem auto;
    max-width: 40rem;
}

.form-control {
    margin: 0.5rem 0;
}

.form-control p {
    color: red;
    margin: 0;
}

label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.15rem;
}

input:focus,
textarea:focus {
    border-color: lightblue;
    background-color: rgb(225, 240, 245);
    outline: none;
}

.invalid input {
    border: 1px solid red;
}
</style>