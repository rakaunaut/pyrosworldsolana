<script lang="ts">

import FadeInComponent from "./FadeInComponent.svelte";

export let img1: string;
export let img2: string;
export let img3: string;
export let img4; String;


</script>

<FadeInComponent sectionName="game">
  <section class="w-screen flex justify-center bg-bgDark1 relative ">
    <div class="pb-0 pt-4 bg-bgDark1 2xl:w-[1200px] lg:w-[1000px] xl:w-[1150px]">

        <div class="container mb-20">
          
          <div class="max-w-2xl text-center lg:text-left mb-16 mx-auto lg:ml-0 lg:mr-0">
            <span class="block-subtitle">Pyros World</span>
            <h2 class="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-primaryText">
              Game Insights
            </h2>
          
          </div>
          <div class="flex 2xl:w-[1200px] lg:w-[1000px] xl:w-[1150px] flex-wrap sm:flex-nowrap gap-3 items-stretch h-auto px-2 sm:px-0">
    
            <div class="flex flex-col bg-bgDark3 border border-primaryColor rounded-xl">
              <img src={img1} class="rounded-t-xl" alt="Game Insights"/>
              <div class="flex flex-col p-4">
             
              <h3 class="text-2xl font-bold text-primaryText">Play & Earn Rewards</h3>
              <p class="content-text-white mt-3">
                Utilize your Pyro NFT to earn rewards. Collect up to 420M PYRO
                tokens and unlimited FYRE in-game. Guaranteed long-term
                benefits!
              </p> </div>
            </div>

         
            <div class="flex flex-col bg-bgDark3 border border-primaryColor rounded-xl">
              <img src={img2} class="rounded-t-xl" alt="Game Insights"/>
              <div class="flex flex-col p-4">
             
              <h3 class="text-2xl font-bold text-primaryText">Adventurous Challenges</h3>
              <p class="content-text-white mt-3">
              The fastest play-through puts surviving players on top of the leaderboard. Take on the royale rumble in direct or multi-player competitions.
              </p> </div>
            </div>

           
          
          </div>

          <div class="flex 2xl:w-[1200px] lg:w-[1000px] xl:w-[1150px] flex-wrap sm:flex-nowrap gap-3  items-stretch h-auto mt-3 px-2 sm:px-0">
          
            <div class="flex flex-col bg-bgDark3 border border-primaryColor rounded-xl">
              <img src={img3} class="rounded-t-xl" alt="Game Insights" />
              <div class="flex flex-col p-4">
             
              <h3 class="text-2xl font-bold text-primaryText">Skill-Based Gameability</h3>
              <p class="content-text-white mt-3">
              Become the fastest! Prove your skills along your in-game mastery to beat the champions. Whoever dominates the leaderboard, rules Pyros World.              </p> </div>
            </div>
           
            <div class="flex flex-col bg-bgDark3 border border-primaryColor rounded-xl">
              <img src={img4} class="rounded-t-xl" alt="Game Insights" />
              <div class="flex flex-col p-4">
             
              <h3 class="text-2xl font-bold text-primaryText">Victory Awards</h3>
              <p class="content-text-white mt-3">
              Winnings make you evolve. PYRO and FYRE provide you with both lucrative prizes and upgrade packages on offer within the Pyro Shop.
              </p> </div>
            </div>
          
          </div>
          
        </div>
     
    </div>
  </section>
</FadeInComponent>
