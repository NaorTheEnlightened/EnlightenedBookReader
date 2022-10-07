<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ myBooks }}</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      myBooks: []
    }
  },
  mounted() {
    /*    axios.get('http://localhost:3000/data')
            .then((res) => {
              this.myBooks = res.data
            })*/
    fetch('http://localhost:3000/data', {
      method: 'GET',
      headers: new Headers(),
      mode: 'cors',
      cache: 'default',
    }).then((res) => {
      debugger
      res.json().then((data) => {
        debugger
        this.myBooks = data
      })
    })
  }
}
</script>
