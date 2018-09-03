<template>
  <div class="hello">
2222222222
    111111
  </div>
</template>

<script>
import TestService from '../service/TestService';
export default {
  name: 'hello',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{

  },
  created() {
    let _this = this;
    TestService.getTestData()
    .then( res => {
    })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: #F5F5F6;
  height: 100%;
}
</style>
