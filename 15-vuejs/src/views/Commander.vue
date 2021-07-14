<template>
    <div id = 'commander'>
        <h1>Commander !</h1>
            <div id ="form">
        <div id ="form-1" class = "form-section" v-if="page === ''">
          <h2>Choisissez votre salade</h2>
              <div class = "selectDiv">
                <select name="salade" id="salade" v-model="salade">
                    <option value="">--Choisisez une salade--</option>
                    <option v-for="ingre in ingredients.salade" :key="ingre">{{ingre[0]}}  - {{ingre[1]}} euro</option>
                </select>
              </div>
                <button v-on:click="switchPage()"> suivant</button>
        </div>

        <div id ="form-2" class = "form-section" v-if="page === 'topping'">
          <h2>Choisissez votre topping</h2>

            <form action="">
               <div class = "selectDiv">
                <select name="topping" id="topping" class = "invisible" v-model="topping">
                    <option value="">--Choisisez un topping--</option>
                    <option v-for="ingre in ingredients.topping" :key="ingre">{{ingre[0]}}  - {{ingre[1]}} euro</option>
                </select>
                  </div>
                 <button v-on:click="switchPage" > suivant</button>
            </form>
        </div>

        <div id ="form-3" class = "form-section" v-if="page === 'dessert'">
          <h2>Choisissez votre dessert</h2>

            <form action="">
               <div class = "selectDiv">
                <select name="dessert" id="dessert" class = "invisible" v-model="dessert">
                    <option value="">--Choisisez un dessert--</option>
                    <option v-for="ingre in ingredients.dessert" :key="ingre">{{ingre[0]}} - {{ingre[1]}} euro</option>
                </select>
                  </div>
                 <button v-on:click="switchPage"> suivant</button>
            </form>
        </div>

        <div id ="form-4" class = "form-section" v-if="page === 'boisson'">
          <h2 class = "visibleForm4">Choisissez votre boisson</h2>

               <div class = "selectDiv " >
                <select name="boisson" id="boisson" class = "invisible" v-model="boisson">
                   <option value="">--Choisisez une boisson--</option>
                    <option v-for="ingre in ingredients.boisson" :key="ingre">{{ingre[0]}} - {{ingre[1]}} euro</option>
                </select>
                  </div>
                 <button  v-on:click="newCommande" @click="greet">commander</button>
                
        </div>

        <div id="finalisation">
          <h2>Rendez vous dans "Mes commandes"</h2>
        </div>

      
    </div>



    

    <div id = "SelectionUtilisateur"><ul>
      <li v-for="lived in live" :key="lived">{{lived}}</li>
    </ul></div>

       
    </div>
</template>
<script>


export default {
  data() {
      return {
          page: "",
          salade: "",
          topping: "",
          dessert: "",
          boisson: "",
          live: [],
          ingredients: this.$store.getters.ingredients
      }
  },
  methods: {
        switchPage(){
          if(this.page === "") {
            console.log(this.ingredients)
            this.live.push(this.salade)
            this.page = 'topping'
            console.log(this.live)
          } else if (this.page === "topping") {
            this.live.push(this.topping)
            this.page = 'dessert'
            console.log(this.live)
          } else if (this.page === "dessert") {
            this.live.push(this.dessert)
            this.page = 'boisson'
            console.log(this.live)
          } else {
            console.log(this.live)
          }
        },

        newCommande() {
          this.live.push(this.boisson)
          this.$store.dispatch('addCommande', this.live)
        },

        greet() {
          document.getElementById("form-4").style.display = "none";
          document.getElementById("finalisation").style.display = "flex";
          
        }
    }
};
</script>

<style>
#form{
  width : 60%;
  background: rgb(40, 204, 233);
}
select{
  width : 400px;
  height : 50px;
  border : none;
  background: rgb(221, 221, 221);
}
.form-section{
  display : flex;
  flex-wrap : wrap;
  width : 100%;
  height : 500px;
  align-content: center;
  justify-content : center;
}

.form-section h2 {
  width : 100%;
  margin-bottom : 70px;
}

.selectDiv{
  width : 100%;
  display : flex; 
  justify-content: center;
  margin-bottom : 40px;
}
button{
  border: none;
  width : 200px;
  height : 40px;
  background: chartreuse;
}
#SelectionUtilisateur{
  width : 40%;
}
#SelectionUtilisateur ul{
  list-style: none;
}

#SelectionUtilisateur ul li{
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
#commander{
  display : flex; 
  flex-wrap: wrap;

}

.invisibleForm4{
  display : none;
}
#finalisation{
  display : none;
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
}

</style>
