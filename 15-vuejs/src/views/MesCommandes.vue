<template>

<div id= "MesCommandes">
    <h1>Mes commandes</h1>
    <ul id="listeCommande" v-for="commande in this.$store.getters.Live" :key="commande">
        <li>{{commande[0]}}</li>
        <li>{{commande[1]}}</li>
        <li>{{commande[2]}}</li>
        <li>{{commande[3]}}</li>
         <button class ="delete" @click="greet">Supprimer</button>
    </ul>
    
     
     </div>
</template>
<script>


export default {
  data() {
      return {
          
      }
  },
  methods: {
        greet() {
            document.getElementById("listeCommande").style.display = "none"
        }
    }
};
</script>

<style>
.delete{
    background: red;
    color : white;
    font-size : 24px;
    border-radius : 10px;
}
#MesCommandes{
    display : flex; 
    justify-content: center;
    flex-wrap: wrap;
}
#listeCommande{
    width : 60%;
}
li{
    list-style: none;
    font-size : 24px; 
    margin-bottom : 20px; 
     background:rgb(40, 204, 233);
  box-shadow: black;
  height : 60px; 
  border-radius : 10px;
  display : flex; 
  justify-content: center;
  align-items: center;
}
h1{
  background: rgb(221, 221, 221);
  margin: 0;
  height : 70px;
    display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom : 30px;
}
</style>
