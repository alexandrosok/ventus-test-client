<template>
  <div>
    <v-btn style="margin:20px;" @click="redirectToUserManagement">
      User Management
    </v-btn>
    Dashboard
    <v-divider/>
    <v-data-table
      :headers="headers"
      :items="dataList"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>

    <v-data-table
      :headers="headers2"
      :items="dataList"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>

    <v-data-table
      :headers="headers3"
      :items="dataList"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
  import DataHttpService from '../../services/Data.service'
  import { headers, headers2, headers3 } from '../../Helpers/Headers'

  export default {
    name: 'app-dashboard',
    data: () => ({
      user: null,
      isAdmin: false,
      DataHttpService,
      dataList: [],
      headers: headers,
      headers2: headers2,
      headers3: headers3
    }),
    beforeMount () {
      this.user = localStorage.getItem('user')
      if (!this.user) {
        this.$router.push('/')
      }
      this.user = JSON.parse(this.user)
      this.isAdmin = this.user.role === 'admin'
      this.DataHttpService = new DataHttpService(this.$http)
      this.DataHttpService.GetData()
        .then((response) => {
          response.data.forEach((item) => {
            this.dataList.push(item)
          })
        })
    },
    methods: {
      redirectToUserManagement () {
        this.$router.push('/user-management')
      }
    }
  }
</script>
