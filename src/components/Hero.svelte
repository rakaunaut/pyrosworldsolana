<script lang="ts">
  import FadeInComponent from "./FadeInComponent.svelte";
  import AppStoreBtn from "./AppStoreBtn.svelte";
  import GooglePlayBtn from "./GooglePlayBtn.svelte";

  export let webm: string;
  export let mp4: string;
</script>

<FadeInComponent sectionName="start">
  <section
    class="w-screen flex justify-center items-center bg-bgDark1 mb-0 g:pb-0"
    id="start"
  >
    <div
      class="w-full sm:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 sm:pt-16 lg:pt-20 text-center"
    >
      <h3
        class="text-secondaryColor text-sm sm:text-base mb-6 sm:mt-32 mt-16 font-bold"
      >
        PYROS WORLD
      </h3>

      <div
        class="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide text-primaryText px-8 sm:px-8 lg:px-4"
      >
        <h1 class="inline">Radix's First 3D Battle Royale Game</h1>
      </div>

      <h2
        class="text-secondaryText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48"
      >
        Play-2-Earn by using gameable NFTs
      </h2>

      <div
        class="flex gap-3 sm:gap-12 sm:flex-row mt-8 mb-10 justify-center"
      >
        <AppStoreBtn />
        <GooglePlayBtn />
        <!-- <button
          class="contained-button w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0"
          aria-label="Get started"
        >
          Get it on GooglePlay
        </button>
        <button
          class="w-64 sm:w-52 h-12 rounded-xl font-bold text-primaryText border border-solid flex justify-center items-center cursor-pointer bg-bgDark2 hover:bg-bgDark3 border-primaryColor transition"
          aria-label="Live demo"
        >
          Get it on AppStore
        </button> -->
      </div>

      <div class="relative w-screen flex justify-center">
        <video autoPlay muted loop class="w-full sm:w-10/12 2xl:w-[1200px] mx-auto z-10">
          <source src={mp4} type="video/mp4 codecs=hvc1" />
          <source src={webm} type="video/webm" />
        </video>
      </div>

      <!-- <div class="relative w-screen flex justify-center">
        <div
          class="shape-divider-bottom-1665343298 mt-4 sm:mt-16 hidden lg:block"
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            class="bg-bgDark2"
          >
            <path
              d="M1200 0L0 0 598.97 114.72 1200 0z"
              class="shape-fill bg-bgDark1 fill-bgDark1"
            ></path>
          </svg>
        </div>
      </div>  -->
    </div>
  </section>
</FadeInComponent>
