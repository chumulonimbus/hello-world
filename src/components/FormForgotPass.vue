<template>
    <v-card
      class="pa-10 ma-auto my-12"
      max-width="374"
    >
        <template>
            <h4 class="font-weight-bold text-h5 grey--text text--darken-4">Forgot Password</h4>
            <p class="mb-3 text-caption grey--text text--darken-1">Send your email to us to reset password</p>
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
        </v-form>
        <v-card-actions class="pa-0">
            <v-btn elevation="0" block class="pa-5 text-capitalize mb-1" color="yellow darken-1">
                Submit
            </v-btn>
        </v-card-actions>
        <template>
            <div class="d-flex align-center">
                <router-link to="/" class="me-auto text-caption">Already have an account</router-link>
                <!-- <a href="#" class="me-auto text-caption">Already have an account</a> -->
            </div>
        </template>
    </v-card>
</template>

<script>
    export default {
        name: 'FormForgotPass',
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