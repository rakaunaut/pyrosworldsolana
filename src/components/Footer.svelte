<script lang="ts">
import TelegramIcon  from "../assets/icons/TelegramIcon.svelte";
import PyroLogo  from "../assets/logos/PyroLogo.svelte";
import TwitterIcon  from "../assets/icons/TwitterIcon.svelte";
import InstaIcon from "../assets/icons/InstaIcon.svelte";

export let logo:string;
</script>


    <footer aria-label="Site footer">
      <div class="pt-10  lg:pt-20 lg:pb-16 bg-bgDark1 radius-for-skewed ">
        <div class="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div class="flex justify-between flex-wrap">
            <div class="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div class="flex justify-center lg:justify-start items-center grow basis-0">
                <div class="text-white mr-2 text-6xl">
                  <PyroLogo {logo}/>
                </div>
                <div class="text-white font-['Inter'] font-bold text-xl">
                  PYROS WORLD
                </div>
              </div>
              <p class="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet, consetetur sadipscing. <br/>
          
              </p>
            
           
            </div>
            <div class="flex flex-col gap-3 items-end mx-auto mb-10 sm:mx-0 sm:mb-0">
            <div class="flex gap-3 mx-auto lg:mx-0">
              <a
                class="inline-block w-10  h-10 p-2 pt-[0.55rem] outlined-button"
                href="/"
                aria-label="Telegram"
              >
                <TelegramIcon />
              </a>
              <a
                class="inline-block w-10  h-10 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button"
                href="/"
                aria-label="X"
              >
                <TwitterIcon />
              </a>
              <a
                class="inline-block w-10  h-10 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button"
                href="/"
                aria-label="Instagram"
              >
             <InstaIcon />
              </a>
            </div>
            <div class=" text-gray-400 leading-loose text-xs">
              2025 Pyros World LLC
          
              </div></div>

          </div>
        </div>
      </div>
    </footer>

