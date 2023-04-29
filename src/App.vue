<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class=" top-0 bg-transparent backdrop-blur-xl sticky z-30 shadow-xl">
    <div class="  flex mx-auto justify-between px-20 py-5 items-center">
      <div class=" flex">
        <p class=" text-3xl font-Poppins italic font-semibold text-[#303538]"><a class=" text-yellow-300">T</a>HIS IS ME!</p>
      </div>
      <div class=" flex">
        <nav id="navbar" class=" gap-6 font-Poppins flex text-[#303538]">
          <div class=" mx-2" >
            <RouterLink class="  hover:bg-yellow-400 rounded-full p-2" to="/">About Me</RouterLink>
          </div>
          <div class=" mx-2">
             <RouterLink class="  hover:text-white hover:bg-blue-500 rounded-full p-2" to="/unique">Unique Selling Point</RouterLink>
          </div>
          <div class=" mx-2">
            <RouterLink class="  hover:bg-lime-400 rounded-full p-2" to="/mission">Mission Statement</RouterLink>
          </div>
          <div class=" border-l border-gray-950 pl-6">
            <RouterLink class="  hover:bg-violet-400 hover:text-white hover:rounded-full p-2" to="activity">JUST DO IT!</RouterLink>
          </div>
        </nav>
      </div>
    </div>
  </header>

  <RouterView />
</template>
<script>
export default{
  mounted(){
    
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,700;0,800;0,900;1,400;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
</style>
