<template>
  <v-container>
    user management
    <v-list-item three-line>
      <v-text-field
        label="Username"
        v-model="username"
      ></v-text-field>
    </v-list-item>
    <v-list-item three-line>
      <v-text-field
        type="password"
        label="Password"
        v-model="password"
      ></v-text-field>
    </v-list-item>
    <v-list-item three-line>
      <v-radio-group v-model="radioGroup">
        <v-radio
          v-for="n in ['user','admin']"
          :key="n"
          :label="n"
          :value="n"
        ></v-radio>
      </v-radio-group>
    </v-list-item>
    <v-btn @click="setUser">
      Save User
    </v-btn>
  </v-container>
</template>

<script>

  import AuthHttpService from '../../services/Auth.service'

  export default {
    name: 'app-management',
    data: () => ({
      AuthHttpService,
      user: null,
      username: null,
      password: null,
      role: null,
      checkbox: true,
      radioGroup: 1,
      switch1: true
    }),
    beforeMount () {
      this.user = JSON.parse(localStorage.getItem('user'))
      if (!this.user || this.user.role !== 'admin') {
        this.$router.push('/auth')
      }
      this.AuthHttpService = new AuthHttpService(this.$http)
    },
    methods: {
      setUser () {
        let userData = {
          username: this.username,
          password: this.password,
          role: this.radioGroup
        }
        this.AuthHttpService.Register(userData)
          .then((response) => {
            console.log(response)
          })
      }
    }
  }
</script>
