<template>
  <div class="home">
    <h1>Découvrez de la bonne BOUFFE</h1>
    <div class="commander">
      <a href="commander">Commander dès maintenant</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style >

.home{
  display : flex;
  flex-wrap : wrap;
  width : 100%;
  justify-content: center;
}
h1{
  width : 100%;
  background: rgb(221, 221, 221);
    margin: 0;
  height : 70px;
    display: flex;
  align-items: center;
  justify-content: center;
}
  .commander{
    width : 400px;
    height : 100px;
    background: rgb(40, 204, 233);
    display : flex; 
    justify-content: center;
    align-items: center;
    margin-top : 50px;
  }
  .commander a{
    color : white;
    text-decoration: none;
    font-size : 24px;
  }
</style>
