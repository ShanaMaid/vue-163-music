<template>
  <div id="app">
    <headers></headers>
    <contents></contents>
    <footers></footers> 
  </div>
</template>

<script>
import Headers from './components/headers'
import Contents from './components/contents'
import Footers from './components/footers'
export default {
  name: 'app',
  components: {
    Headers,
    Contents,
    Footers
  }
}
</script>

<style>
*{
  font-family: microsoft yahei;
}
#app {
  width: 1020px;
  margin: 0 auto;
  padding: 0;
  box-shadow: 0px 0px 10px 7px rgb(225,225,226);
}

a,a:hover,a:visited,a:link{
  text-decoration: none;
  outline: none;
}


</style>
