<template>
  <div class="flex flex-col w-full h-auto ">  
    <div id="container_navigation" class=" flex-col font_rufin flex justify-center  px-20"  :style="{backgroundImage: `url(${require('../assets/image/menu/Image.png')})`}" >
      <span class=" text-white text-8xl font_rufin">View Our </span>
      <span class=" text-white text-8xl font_rufin">New Menu</span>
      <span class=" text-white font_rufin mt-11 text-lg">The freshest ingredients for you every day</span>
    </div>
    
    <div class="flex flex-col h-screen">
      <div class="w-full flex-col items-center py-14 flex justify-center">  
        <span class=" text-7xl font_rufin font-semibold">Starters</span>
        <span class=" mt-3">This is a section of your menu. Give your section a brief description</span>
      </div>
      <div class="flex flex-row justify-between px-16">
        <div class="flex pr-14 pl-6">
          <img style=" width:30vw; " class=" h-auto" src="../assets/image/menu/Image1.png" alt="">
        </div>
        <div>
          <div class=" flex flex-col w-full ">
            <span class=" w-full border-b-4 text-right text-3xl font_rufin font-bold border-black border-dotted">$ <span class=" text-xl relative -ml-2">20</span></span>
            <span class="  text-5xl relative mt-2 font_rufin font-semibold w-4/5 ">Grilled Okra and Tomatoes </span>
            <span class=" mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
          </div>
          
          <div class=" flex flex-col w-full mt-4 mb-4">
            <span class=" w-full border-b-4 text-right text-3xl font_rufin font-bold border-black border-dotted">$ <span class=" text-xl relative -ml-2">I8</span></span>
            <span class="  text-5xl  relative mt-2 font_rufin font-semibold  ">Cucumber Salad</span>
            <span class=" mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
          </div>
          <div class=" flex flex-col w-full ">
            <span class=" w-full border-b-4 text-right text-3xl font_rufin font-bold border-black border-dotted">$ <span class=" text-xl relative -ml-2">12</span></span>
            <span class="  text-5xl  relative mt-2 font_rufin font-semibold  "> Basil Pancakes</span>
            <span class=" mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
          </div>

        </div>
      </div>
    </div>
    
    <div class="flex flex-col h-screen mt-28">
      <div class="w-full flex-col items-center py-14 flex justify-center">  
        <span class=" text-7xl font_rufin font-semibold">Mains</span>
        <span class=" mt-3">This is a section of your menu. Give your section a brief description</span>
      </div>
      <div class="flex flex-row-reverse justify-between px-16">
        <div class="flex pl-14 pr-6">
          <img style=" width:30vw; " class=" h-auto" src="../assets/image/menu/Image2.png" alt="">
        </div>
        <div>
          <div class=" flex flex-col w-full pl-8 ">
            <span class=" w-full border-b-4 text-right text-3xl font_rufin font-bold border-black border-dotted">$ <span class=" text-xl relative -ml-2">20</span></span>
            <span class="  text-5xl relative mt-2 font_rufin font-semibold w-4/5 ">Deep Sea Snow White Cod Fillet</span>
            <span class=" mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
          </div> 
          <div class=" flex flex-col w-full pl-8 mt-4 mb-4">
            <span class=" w-full border-b-4 text-right text-3xl font_rufin font-bold border-black border-dotted">$ <span class=" text-xl relative -ml-2">I8</span></span>
            <span class="  text-5xl  relative mt-2 font_rufin font-semibold  ">Steak With Rosemary Butter</span>
            <span class=" mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
          </div>
          <div class=" flex flex-col w-full pl-8 ">
            <span class=" w-full border-b-4 text-right text-3xl font_rufin font-bold border-black border-dotted">$ <span class=" text-xl relative -ml-2">12</span></span>
            <span class="  text-5xl  relative mt-2 font_rufin font-semibold  "> Steaks with Grilled Kimchi</span>
            <span class=" mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col h-screen mt-28">
      <div class="w-full flex-col items-center py-14 flex justify-center">  
        <span class=" text-7xl font_rufin font-semibold">Pastries & Drinks</span>
        <span class=" mt-3">This is a section of your menu. Give your section a brief description</span>
      </div>
      <div class="flex flex-row justify-between px-16">
        <div class="flex pl-14 pr-6">
          <img style=" width:30vw; " class=" h-auto" src="../assets/image/menu/Image3.png" alt="">
        </div>
        <div>
          <div class=" flex flex-col w-full pl-8 ">
            <span class=" w-full border-b-4 text-right text-3xl font_rufin font-bold border-black border-dotted">$ <span class=" text-xl relative -ml-2">20</span></span>
            <span class="  text-5xl relative mt-2 font_rufin font-semibold w-4/5 ">Wine Pairing </span>
            <span class=" mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
          </div> 
          <div class=" flex flex-col w-full pl-8 mt-4 mb-4">
            <span class=" w-full border-b-4 text-right text-3xl font_rufin font-bold border-black border-dotted">$ <span class=" text-xl relative -ml-2">I8</span></span>
            <span class="  text-5xl  relative mt-2 font_rufin font-semibold  ">Natural Wine Pairing</span>
            <span class=" mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
          </div>
          <div class=" flex flex-col w-full pl-8 ">
            <span class=" w-full border-b-4 text-right text-3xl font_rufin font-bold border-black border-dotted">$ <span class=" text-xl relative -ml-2">12</span></span>
            <span class="  text-5xl  relative mt-2 font_rufin font-semibold  ">Whisky Flyer</span>
            <span class=" mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- formulaire -->
    <div class="bg_2 w-full mt-32 py-12  flex-col items-center flex ">
      <span class=" font_rufin text-7xl">Make a Reservation</span>
      <span class=" text-gray-500 mt-3">Get in touch with restaurant</span>
      <div class=" flex flex-row ">
        <div class=" mt-24" >
          <select class=" px-20 bg-transparent border border-gray-600 py-2 mx-3" name="" id="">
            <option value="">12</option>
            <option value="">14</option>
            <option value="">16</option>
          </select>
          <select class=" px-20 bg-transparent border border-gray-600 py-2 mx-3" name="" id="">
            <option value="">06:00 pm</option>
            <option value="">06:00 am</option>
          </select>
          <select class=" px-20 bg-transparent border border-gray-600 py-2 mx-3" name="" id="">
            <option value="">2prs</option>
            <option value="">4prs</option>
            <option value="">6prs</option>
          </select>
        </div>
      </div>
      <button class=" px-12 py-2 text-white font_rufin button1 mt-16 ">Book Now</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  components: {
  }
}
</script>

<style scoped>

</style>
