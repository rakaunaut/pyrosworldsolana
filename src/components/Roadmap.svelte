<script lang="ts">

import CheckArrowIcon from '../assets/icons/CheckArrowIcon.svelte';
import CheckCircleIcon from '../assets/icons/CheckCircleIcon.svelte';
import FadeInComponent from './FadeInComponent.svelte';

  </script>

<FadeInComponent sectionName="roadmap">
  <section id="roadmap" class="relative w-full bg-bgDark1 mt-12 sm:mt-24 mb-12 lg:my-20 lg:mb-24 pt-4">

      <div class="container flex flex-wrap items-start 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto sm:pl-4 xl:pr-16 xl:pl-16">
 
        <div class="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
          <div class=" p-4">
            <div class="flex flex-col grid-cols-9 p-2 mx-auto sm:grid">

              <div class="flex sm:contents flex-row-reverse">
                <div class="relative p-4 my-6 text-gray-800 bg-bgDark3 border border-gray-700 rounded-xl col-start-1 col-end-5 mr-auto sm:mr-0 sm:ml-auto">
                  <span class="absolute text-lg text-primaryColor font-bold -top-8 left-2 whitespace-nowrap">
                    PYRO Token
                  </span>
                  <ul class=" text-primaryText">
                    <li class="mb-4 flex items-center">
                      <CheckArrowIcon color="fill-primaryColor" />
                      <span>Pre-Sale via NFTs</span>
                    </li>
                    <li class="mb-4 flex items-center">
                      <CheckArrowIcon />
                      <span>Tokenomics</span>
                    </li>
                    <li class=" flex items-center">
                      <CheckArrowIcon />
                      <span>Distribution</span>
                    </li>
                  </ul>
                </div>
                <div class="relative col-start-5 col-end-6 mr-7 sm:mx-auto">
                  <div class="flex items-center justify-center w-6 h-full">
                    <div class="w-1 h-full  rounded-t-full bg-primaryColor"></div>
                  </div>
                  <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-primaryColor rounded-full top-1/2"></div>
                </div>
              </div>

              <div class="flex sm:contents">
                <div class="relative col-start-5 col-end-6 mr-7 sm:mx-auto">
                  <div class="flex items-center justify-center w-6 h-full">
                    <div class="w-1 h-full bg-secondaryColor"></div>
                  </div>
                  <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-secondaryColor rounded-full top-1/2"></div>
                </div>
                <div class="relative p-4 my-6 text-gray-800 bg-bgDark3 border border-gray-700  rounded-xl col-start-6 col-end-10 mr-auto">
                  <span class="absolute text-lg text-secondaryColor font-bold -top-8 left-2 whitespace-nowrap">
                    MVP & Testing
                  </span>
                  <ul class=" text-secondaryText">
                    <li class="mb-4 flex items-center">
                     <CheckCircleIcon />
                      <span>Building MVP</span>
                    </li>
                    <li class="mb-4 flex items-center">
                    <CheckCircleIcon />
                      <span>Closed Beta Test</span>
                    </li>
                    <li class=" flex items-center">
                    <CheckCircleIcon />
                      <span>Mainnet Release Beta</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="flex sm:contents flex-row-reverse">
                <div class="relative p-4 my-6 text-gray-800 bg-bgDark3 border border-gray-700 rounded-xl col-start-1 col-end-5 mr-auto sm:mr-0 sm:ml-auto">
                  <span class="absolute text-lg text-secondaryColor font-bold -top-8 left-2 whitespace-nowrap">
                    Game
                  </span>
                  <ul class="text-secondaryText">
                    <li class="mb-4 flex items-center">
                    <CheckCircleIcon />
                      <span>Public Release</span>
                    </li>
                    <li class="mb-4 flex items-center">
                    <CheckCircleIcon />
                      <span>Play-2-Earn</span>
                    </li>
                    <li class=" flex items-center">
                    <CheckCircleIcon />
                      <span>FYRE Token Launch</span>
                    </li>
                  </ul>
                </div>
                <div class="relative col-start-5 col-end-6 mr-7 sm:mx-auto">
                  <div class="flex items-center justify-center w-6 h-full">
                    <div class="w-1 h-full bg-secondaryColor rounded-t-full"></div>
                  </div>
                  <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-secondaryColor rounded-full top-1/2"></div>
                </div>
              </div>

              <div class="flex sm:contents">
                <div class="relative col-start-5 col-end-6 mr-7 sm:mx-auto">
                  <div class="flex items-center justify-center w-6 h-full">
                    <div class="w-1 h-full bg-secondaryColor"></div>
                  </div>
                  <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-secondaryColor rounded-full top-1/2"></div>
                </div>
                <div class="relative p-4 my-6 text-gray-800 bg-bgDark3 border border-gray-700  rounded-xl col-start-6 col-end-10 mr-auto">
                  <span class="absolute text-lg text-secondaryColor font-bold -top-8 left-2 whitespace-nowrap">
                    Add-Ons
                  </span>
                  <ul class=" text-secondaryText">
                    <li class="mb-4 flex items-center">
                    <CheckCircleIcon />
                      <span>Additional Maps</span>
                    </li>
                    <li class="mb-4 flex items-center">
                    <CheckCircleIcon />
                      <span>Pyro Shop</span>
                    </li>
                    <li class=" flex items-center">
                    <CheckCircleIcon />
                      <span>Upgrade Packages</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="flex sm:contents flex-row-reverse">
                <div class="relative p-4 my-6 text-gray-800 bg-bgDark3 border border-gray-700  rounded-xl col-start-1 col-end-5 mr-auto sm:mr-0 sm:ml-auto">
                  <span class="absolute text-lg text-secondaryColor font-bold -top-8 left-2 whitespace-nowrap">
                    Multi-Player
                  </span>
                  <ul class=" text-secondaryText">
                    <li class="mb-4 flex items-center">
                    <CheckCircleIcon />
                      <span>Royal Rumble Mode</span>
                    </li>
                    <li class="mb-4 flex items-center">
                    <CheckCircleIcon />
                      <span>Extended Gameplay</span>
                    </li>
                  </ul>
                </div>
                <div class="relative col-start-5 col-end-6 mr-7 sm:mx-auto">
                  <div class="flex items-center justify-center w-6 h-full">
                    <div class="w-1 h-full bg-secondaryColor rounded-t-full "></div>
                  </div>
                  <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-secondaryColor rounded-full top-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div> 

        <div class="relative sm:sticky sm:top-20 w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
          <div class="mx-auto lg:mx-auto w-11/12 sm:w-4/5  lg:w-unset">
            <span class="block-subtitle">Roadmap</span>
            <h2 class="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
              Ready for the ultimate Play-2-Earn experience?
            </h2>
            <div class="flex gap-5">
              <div class="w-8 h-auto mb-3 rounded-sm bg-[#F7BA50]"></div>
              <p class="mb-3 font-bold text-primaryText leading-loose">
                PRE-SALE Take part in the PYRO token Pre-Sale now. 10% of the
                total supply will be distributed among pre-sale participants.
                Join the party - and be well prepared for Pyros World.
              </p>
            </div>
            <p class="mb-12 text-secondaryText leading-loose">
              PRE-SALE Pyros World is Radix’s first Battle Royale Game - a
              rewarding Play-2-Earn universe that utilizes in-house 3D NFTs.
              Prove yourself on various maps to dominate Pyros World. Whether in
              single or in multi-player mode, the fastest play-through puts
              surviving players on top of the leaderboard earns them rewards.
              PYRO and FYRE tokens guarantee long-term benefits which players
              can use to buy upgrade packages offered at the Pyro Shop. Each of
              the 10,000 Pyro NFTs is unique, comes fully rigged (manipulable
              skeletal structure), and is capable of being used in-game.{" "}
            </p>
         
          </div>
        </div>  
      </div>
  
  </section>
</FadeInComponent>
