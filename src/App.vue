<template>
  <div id="app">
    <Headers></Headers>
    <Contents></Contents>
    <Footers></Footers> 
  </div>
</template>

<script>
import Headers from './components/Headers'
import Contents from './components/Contents'
import Footers from './components/Footers'
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
  width: 1000px;
  margin: 0 auto;
  padding: 0;
  box-shadow: 0px 0px 10px 7px rgb(225,225,226);
}
</style>
