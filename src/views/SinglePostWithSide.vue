<template>
    <div class="flex flex-col w-full h-auto overflow-hidden  ">  
        <div id="container_navigation" class=" flex-col items-center h-screen text-white flex justify-center  px-20"  :style="{backgroundImage: `url(${require('../assets/image/grid_tow_col/Image.png')})`}" >
            <div class=" flex flex-col">
                <div>  
                  <button class="  border-2 text-white px-7  py-2">Fashion</button>
                </div>
                <div class=" mt-6 flex flex-col">  
                  <span class=" text-7xl font_rufin">Three Ideas for Cooking</span>
                  <span class=" text-7xl font_rufin"> Goat Meat at Home</span> 
                </div>
                <div class=" flex w-full items-center  py-6">
                  <img class=" w-24" src="../assets/image/single_page_side_bare/Avatar.png" alt="photo">
                  <span class="list_2 relative ">Julie Christie</span>
                  <li class=" list_2 ml-3"><span class=" relative ">October 17,2021</span></li>
                  <li class=" list_2 ml-3"><span class=" relative ">3:33 pm</span></li>
                  <li class=" list_2 ml-3"><span class=" relative ">2 comments</span></li>
                </div>
            </div>
        </div>
        <div class=" flex w-full flex-row px-20 mt-14">
          <div class=" flex flex-col w-3/4">
            <div class="flex py-12 ">  
              <span > <span class=" text-gray-400">Home / Blog / </span> Three Ideas for Cooking Goat Meat at Home</span>
            </div>
            <span class=" text-lg pr-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc.</span>
            <div class="flex flex-row pr-5 py-6 mt-10">
              <div class=" pr-7">
                <img src="../assets/image/single_page_side_bare/Image1.png" alt="">
              </div>
              <div class=" flex flex-col">
                <img class=" mb-4" src="../assets/image/single_page_side_bare/Image2.png" alt="">
                <img class=" mt-4" src="../assets/image/single_page_side_bare/Image3.png" alt="">
              </div>
            </div>
            <span class="text-gray-500 mt-2 pr-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam. Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
            <div class=" w-full justify-center flex italic text-2xl mt-14 font-bold">
              <div class=" w-3/4" style=" color:#5E6600">
                “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. 
              </div>
            </div>
            <div class=" mt-16  pr-5">
              <span class="text-gray-500 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. 
              </span>
            </div>
            <div class="flex flex-row mt-16">
              <span class=" font_rufin text-2xl font-semibold">Tags</span>
              <span class=" border cursor-pointer px-3 border-black mx-2 py-1">Design</span>
              <span class=" border cursor-pointer px-3 border-black mx-2 py-1">Photography</span>
              <span class=" border cursor-pointer px-3 border-black mx-2 py-1">Images</span>
              <span class=" border cursor-pointer px-3 border-black mx-2 py-1">Videos</span>
              <span class=" border cursor-pointer px-3 border-black mx-2 py-1">Musiv</span>
              <span class=" border cursor-pointer px-3 border-black mx-2 py-1">Travel</span>
            </div>
            <div class=" flex flex-row mt-12 items-center">
              <div>
                  <img class=" w-40" src="../assets/image/single_page_side_bare/Avatar.png" alt="photo">
              </div>
              <div class="flex flex-col ml-11 pr-14">
                <span class=" font_rufin text-3xl font-semibold">Julie Christie</span>
                <span class=" mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. </span>
              </div>
            </div>
          </div>
          <div class=" flex flex-col  w-1/3">
            <div class=" border-b-2 border-black">
              <input type="text" class=" w-full outline-none placeholder-black" placeholder=" Search....">
            </div>
            <div class=" font_rufin font-semibold text-2xl border-b-2 mt-32 border-black border-dotted">
              <span>Categorie</span>
            </div>
            <div class="  font-semibold mt-3 text-lg flex flex-col ">
              <span class=" py-1">Fashion</span>
              <span class=" py-1">Food</span>
              <span class=" py-1">Music</span>
              <span class=" py-1">Travel</span>
            </div>
            <div class=" font_rufin font-semibold text-2xl border-b-2 mt-32 border-black border-dotted">
              <span>Recent Comments</span>
            </div>
            <div class="  font-semibold mt-7 text-base flex flex-col ">
              <span class=" "><span class=" text-gray-400">John Mccain </span> Vegan baked oatmeal with fresh berries</span>
              <span class=" "><span class=" text-gray-400">Ana </span>  50 Foods That Are Super Healthy</span>
              <span class=" "><span class=" text-gray-400">Camilla </span>   How Many Carbs Should You Eat for Weight Loss?</span>
              <span class=" "><span class=" text-gray-400">Dailey </span>   22 Foods That Can Give You More Energy</span>
            </div>
            <div class=" font_rufin font-semibold text-2xl border-b-2 mt-32 border-black border-dotted">
              <span>Archive</span>
            </div>
            <div class="  font-semibold mt-3 text-lg flex flex-col ">
              <span class=" py-1">October 2021</span>
              <span class=" py-1">September 2021</span>
              <span class=" py-1">August 2021</span>
            </div>
            <div class=" font_rufin font-semibold text-2xl border-b-2 mt-32 border-black border-dotted">
              <span>Recent Posted</span>
            </div>
            <div class="  font-semibold mt-7 text-base flex flex-col ">
              <div class=" flex flex-row my-2">
                  <div>  
                      <img class=" w-12 h-12" src="../assets/image/port_folio_no_side_bar/bread.png" alt="">
                  </div>
                  <div class=" flex flex-col ml-6">
                    <span>Vegan baked oatmeal with fresh berries</span>
                    <span class=" text-gray-400">Julie Christie</span>
                  </div>
              </div>
              <div class=" flex flex-row my-2">
                  <div>  
                      <img class=" w-12 h-12" src="../assets/image/port_folio_no_side_bar/Image_1.png" alt="">
                  </div>
                  <div class=" flex flex-col ml-6">
                    <span>Vegan baked oatmeal with fresh berries</span>
                    <span class=" text-gray-400">Julie Christie</span>
                  </div>
              </div>
              <div class=" flex flex-row my-2">
                  <div>  
                      <img class=" w-12 h-12" src="../assets/image/port_folio_no_side_bar/Image_2.png" alt="">
                  </div>
                  <div class=" flex flex-col ml-6">
                    <span>Vegan baked oatmeal with fresh berries</span>
                    <span class=" text-gray-400">Julie Christie</span>
                  </div>
              </div>
              <div class=" flex flex-row my-2">
                  <div>  
                      <img class=" w-12 h-12" src="../assets/image/home/Image_3.png" alt="">
                  </div>
                  <div class=" flex flex-col ml-6">
                    <span>Vegan baked oatmeal with fresh berries</span>
                    <span class=" text-gray-400">Julie Christie</span>
                  </div>
              </div>
            </div>
            <div class=" font_rufin font-semibold text-2xl border-b-2 mt-32 border-black border-dotted">
              <span>Tags</span>
            </div>
            <div class="  font-semibold mt-3 text-lg flex flex-col ">
              <div>
                <span class=" border cursor-pointer px-3 border-black mx-2 py-1">Design</span>
                <span class=" border cursor-pointer px-3 border-black mx-2 py-1">Photography</span>
                <span class=" border cursor-pointer px-3 border-black mx-2 py-1">Images</span>
              </div>
              <div class=" mt-6">
                <span class=" border cursor-pointer px-3 border-black mx-2 py-1">Videos</span>
                <span class=" border cursor-pointer px-3 border-black mx-2 py-1">Musiv</span>
                <span class=" border cursor-pointer px-3 border-black mx-2 py-1">Travel</span>
              </div>
            </div>
          </div>
        </div>
        <div class=" mt-28">
          <img src="../assets/image/single_page_side_bare/Blog_PreviousNext.png" alt="">
        </div>
        <div class="flex px-20  flex-col items-center mt-24">
          <div class="w-full flex font_rufin text-4xl font-bold justify-center">5 Comments</div>
          <div class="flex flex-row w-4/5 mt-5">
            <div>
              <img src="../assets/image/grid_tow_col/Avatar3.png" alt="">
            </div>
            <div class=" w-full ml-5 flex flex-col">
              <div class="flex flex-row justify-between">
                <span class=" font_rufin font-semibold text-xl">Leslie Alexander</span>
                <span class=" font-bold"> Reply</span>
              </div>
              <span class=" text-gray-400">March 12,2020,7:08 pm</span>
              <span class=" text-xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. </span>
            </div>
          </div>
          <div class="flex flex-row w-3/4 mt-5 ml-16">
            <div>
              <img src="../assets/image/grid_tow_col/Avatar.png" alt="">
            </div>
            <div class=" w-full ml-5 flex flex-col">
              <div class="flex flex-row justify-between">
                <span class=" font_rufin font-semibold text-xl">Jenifier Lopez</span>
                <span class=" font-bold"> Reply</span>
              </div>
              <span class=" text-gray-400">March 12,2020,7:08 pm</span>
              <span class=" text-xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. </span>
            </div>
          </div>
          <div class="flex flex-row w-4/5 mt-5">
            <div>
              <img src="../assets/image/grid_tow_col/Avatar1.png" alt="">
            </div>
            <div class=" w-full ml-5 flex flex-col">
              <div class="flex flex-row justify-between">
                <span class=" font_rufin font-semibold text-xl">Jane Cooper</span>
                <span class=" font-bold"> Reply</span>
              </div>
              <span class=" text-gray-400">March 12,2020,7:08 pm</span>
              <span class=" text-xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. </span>
            </div>
          </div>
          <div class="flex flex-row w-4/5 mt-5">
            <div>
              <img src="../assets/image/grid_tow_col/Avatar.png" alt="">
            </div>
            <div class=" w-full ml-5 flex flex-col">
              <div class="flex flex-row justify-between">
                <span class=" font_rufin font-semibold text-xl">Jenifier Lopez</span>
                <span class=" font-bold"> Reply</span>
              </div>
              <span class=" text-gray-400">March 12,2020,7:08 pm</span>
              <span class=" text-xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. </span>
            </div>
          </div>
        </div>
        
        <div class="flex px-20  flex-col items-center mt-24 pb-16">
          <span class=" border-t-2 border-dotted border-black"></span>
          <div class="w-full flex font_rufin text-4xl font-bold justify-center">5 Comments</div>
          
          <div class="flex flex-col w-3/4 mt-5 ml-16">
            <div class="flex flex-col mt-3">
              <span class=" text-lg font-bold">Comment</span>
              <textarea class=" placeholder-black border border-black w-full"  name="" id="" cols="30" rows="10"></textarea>  
            </div>
            <div class="flex flex-col mt-3">
              <span class=" text-lg font-bold">Name*</span>
             <input class=" py-1 placeholder-black border border-black w-full"  type="text">  
            </div>
            <div class="flex flex-col mt-3">.3
              <span class=" text-lg font-bold">Email*</span>
             <input class=" py-1 placeholder-black border border-black w-full"  type="text">  
            </div>
            <div class="flex flex-col mt-3">
              <span class=" text-lg font-bold">Website</span>
             <input class=" py-1 placeholder-black border border-black w-full"  type="text">  
            </div>
            <div class="mt-14">
              <div>
                <button class=" font-bold text-xl border-black border-2 px-6 py-2">Post Comment</button>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>