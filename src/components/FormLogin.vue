<template>
    <v-card
      class="pa-10 ma-auto my-12"
      max-width="374"
    >
        <template>
            <h4 class="font-weight-bold text-h5 grey--text text--darken-4">Welcome Back</h4>
            <p class="mb-3 text-caption grey--text text--darken-1">We’re excited to see you again</p>
        </template>
        <v-form class="mb-2"
            ref="form"
            lazy-validation
        >
            <v-text-field
                v-model="email"
                :rules="[rules.required, rules.email]"
                label="Email"
                class="text-body-2"
            ></v-text-field>

            <v-text-field
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.paswd]"
                :type="show2 ? 'text' : 'password'"
                name="input-10-2"
                label="Password"
                hint="At least 8 characters"
                class="input-group--focused text-body-2"
                @click:append="show2 = !show2"
          ></v-text-field>
        </v-form>
        <v-card-actions class="pa-0">
            <v-btn link elevation="0" block class="pa-5 text-capitalize mb-1" color="yellow darken-1" :to="'/dashboard'">
                Sign in
            </v-btn>
        </v-card-actions>
        <template>
            <div class="d-flex align-center">
                <router-link to="/forgotpass" class="me-auto text-caption">Forgot Password</router-link>
                <router-link to="/register" class="text-caption">Create Account</router-link>
                <!-- <a href="#/forgot" class="me-auto text-caption">Forgot password?</a>
                <a href="#/regist" class="text-caption">Create Account</a> -->
            </div>
        </template>
    </v-card>
</template>

<script>
    export default {
        name: 'FormLogin',
        data: () => ({
            show2: false,
            password: 'Password',            
            email: '',
            rules: {
                required: value => !!value || 'Required.',
                counter: value => value.length <= 20 || 'Max 20 characters',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                },
                paswd: () => {
                    return value => value.length >= 8 || 'Min 8 characters'
                }
            },
        })
    }
</script>