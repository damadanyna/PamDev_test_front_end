<template>
  <div  class=" h-full flex flex-row w-full justify-center px-20">
    <div  class=" items-center h-full justify-center flex flex-col w-4/5 ">
        <div class=" flex flex-col">
            <span class=" text-indigo-700 font_rufin font-medium text-6xl">Welcome to </span>
           <div class="flex flex-row items-center">
            <img src="../../assets/image/logo-PamDev-footer.png" alt="">
             <span class=" text-2xl text-green-500 font-bold">PamDev </span>
             <span class=" text-2xl text-gray-400 font-bold ml-2"> Testing_app </span>
           </div>
        </div>
         <span class=" text-2xl text-gray-400 ml-2">By damadanyna@gmail.com </span>
    </div>
    <div  class=" flex flex-col h-full justify-center w-3/5 pr-28" >
        <div>
            <span class=" text-3xl font_rufin text-black">Connexion</span>
        </div>
        <div class=" flex flex-col mt-5">
            <span>Nom d'utilisateur</span>
            <input class=" font-bold px-5 py-2 border-2 border-gray-500 focus:border-green-600" type="text">
        </div>
        <div class=" flex flex-col mt-5">
            <span>Mots de passe</span>
            <input class=" font-bold px-5 py-2 border-2 border-gray-500 focus:border-green-600" type="password">
        </div>
        <span class=" text-gray-400">Enter votre Nom & vos mots de passe</span>
        <button @click="connexion()" class=" mt-7 text-white py-3 text-xl" style=" background:#5E6600"> C'est partie</button>
            
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        connexion(){
            this.$store.state.loged=true
        }
    }
}
</script>

<style>

</style>