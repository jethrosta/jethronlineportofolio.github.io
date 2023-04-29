<template>
    <!-- Jumbotron -->
    <div class="  bg-fixed h-[50vw] bg-no-repeat bg-cover bg-center scale-80" style="background-image: url('src/images/unique.jpg');">
        <div class=" backdrop-brightness-75 bg-white/30 flex h-[20vw] w-[90vw] py-20 m-auto translate-y-[10vw]">
            <p class=" m-auto  font-Poppins text-4xl text-white">This Section is filled by my character strengths that make me unique</p>
        </div>
    </div>
    <!-- Love Section -->
    <div class="h-[50vw] bg-blue-500 p-20">
        <div class=" flex ">
            <p class=" pt-10 font-Bruno text-8xl italic font-extrabold text-rose-500">LOVE<span>💖</span></p>
        </div>
        <div class=" mt-10">
            <p class=" text-4xl font-Bruno text-purple-400 leading-loose">
                <span class=" bg-emerald-300 rounded-lg px-2">Valuing</span> close relations with <span class=" bg-emerald-300 rounded-lg px-2">others</span>, in particular those in which <span class=" bg-emerald-300 rounded-lg px-2 ">sharing & caring</span>  are reciprocated; I love being <span class=" bg-emerald-300 rounded-xl px-2 ">close</span> to people.
            </p>
        </div>
    </div>
    <!-- Hope Section -->
    <div class="h-[50vw] bg-blue-400 p-20">
        <div class="flex">
            <p class=" ml-64 pt-10 font-Poppins text-8xl italic font-extrabold text-lime-500"><span class="highlight-container"><span class=" highlight">HOPE 🌿</span></span></p>
        </div>
        <div class=" mt-10">
            <p class=" text-4xl font-Poppins text-amber-300 leading-loose">
                I always expecting the best in the future and working hard to achieve it; believing that a good future is something that can be brought about.
            </p>
        </div>
    </div>
    <!-- Appreciation of Beauty & Excellence section -->
    <div class="h-[50vw] bg-blue-300 p-20">
        <div class=" justify-center flex text-4xl">🦋</div>
        <div class=" flex">
            <p class=" text-zinc-700 font-serif text-5xl mx-auto underline underline-offset-4 decoration-yellow-400"><span class=" text-8xl italic font-bold text-emerald-500">A</span>ppreciation of <span class="  text-emerald-500 italic font-bold text-8xl">B</span>eauty & <span class=" italic font-bold text-8xl  text-emerald-500">E</span>xcellence</p>
        </div>
        <div class=" p-32 w-2/3">
            <p class=" text-justify border-l-8 border-lime-500 text-gray-700 pl-4  font-serif text-3xl">Noticing and appreciating beauty, excellence, and/or skilled performance in various domains of life, from nature to art to mathematics to science to everyday experience.</p>
        </div>
    </div>
    <!-- Social Intellignece section -->
    <div class="h-[50vw] bg-blue-200 p-20">
        <div class=" flex justify-end mr-20">
            <p class="  text-7xl font-mono">Social Intelligence 🫱🏼‍🫲🏻</p>
        </div>
        <div class=" p-20 flex justify-end mt-20">
            <p class=" font-mono leading-loose text-3xl">Being aware of the motives/feelings of others and oneself; knowing what to do to fit into different social situations; knowing what makes other people tick.<br>#kacika</p>
        </div>
    </div>
    <!-- Fairness Section -->
    <div class="h-[50vw] bg-blue-100 p-20">
        <div class=" flex justify-end">
            <p class=" font-sans text-8xl text-indigo-400">Fairness <span class=" bg-indigo-500 rounded-full">⚖️</span></p>
        </div>
        <div class=" mt-20">
            <p class=" text-indigo-400 font-sans text-3xl px-10 text-right leading-loose"><span class="oke"><span class="okebanget">Treating all people the same</span></span> according to notions of fairness and justice; not letting feelings bias decisions about others; <span class="oke"><span class="okebanget">giving everyone a fair chance</span></span><span class=" text-yellow-400 text-7xl">.</span></p>
        </div>
    </div>
</template>
<style scoped>
.highlight-container:before {
  content: " ";
  display: block;
  height: 100%;
  width: 110%;
  margin-left: -3px;
  margin-right: -3px;
  position: absolute;
  background: #ffd500;
  transform: rotate(5deg);
  top: -1px;
  left: -1px;
}
.highlight-container {
  display: inline-block;
}
.highlight-container, .highlight {
  position: relative;
}
.oke:before{
  content: " ";
  display: block;
  height: 80%;
  width: 100%;
  margin-left: -3px;
  margin-right: -3px;
  position: absolute;
  background: #ffd500;
  transform: rotate(3deg);
  top: 9px;
  left: 1px;
  scale:0.9
}
.oke{
    display: inline-block;
}
.oke, .okebanget{
    position:relative
}
</style>