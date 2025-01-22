<script lang="ts">
  import PyroLogo from "../assets/logos/PyroLogo.svelte";
  import { fly } from "svelte/transition";
  import {section} from "../js/section.svelte";

  export let logo: string;

  let mobileOpen: boolean = false;

  const navbarLinks = [
    { label: "Start", href: "/#start", ariaLabel: "start" },    
    { label: "Pre-Sale", href: "/#pre-sale", ariaLabel: "presale" },
    { label: "Roadmap", href: "/#roadmap", ariaLabel: "roadmap" },
    { label: "Tokenomics", href: "/#tokenomics", ariaLabel: "tokenomics" },

    { label: "FAQ", href: "/#FAQ", ariaLabel: "FAQ" },
  ];
</script>

<nav
  class="w-full h-20 flex flex-col justify-center items-center fixed bg-bgDark1 lg:bg-bgDarkTransparent z-40 lg:backdrop-blur-xl"
  aria-label="Main navigation"
>
  <div
    class="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative z-50"
  >
    <a href="/#start" aria-label="Start">
      <div class="flex justify-start items-center grow basis-0">
        <div class="text-white mr-2 text-6xl">
          <PyroLogo {logo} />
        </div>
        <div class="text-white font-['Inter'] font-bold text-xl">
          PYROS WORLD
        </div>
      </div>
    </a>

    <div class="hidden lg:flex h-full pl-12 pb-2 pt-2">
      {#each navbarLinks as link}
        <a
          class="lg:text-base text-2xl leading-6 mr-4 ml-4 2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium  transition h-full pt-2
          {section.name === link.ariaLabel ? 'text-primaryColor scale-110' : 'text-white hover:scale-110'}"
          href={link.href}
          aria-label={link.ariaLabel}
        >
          {link.label}
        </a>
      {/each}
    </div>

    <button
      class="lg:hidden flex flex-col px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-bgDark2"
      on:click={() => (mobileOpen = !mobileOpen)}
      aria-label="button"
    >
      <div class="w-5 h-0.5 bg-gray-500 mb-1"></div>
      <div class="w-5 h-0.5 bg-gray-500 mb-1"></div>
      <div class="w-5 h-0.5 bg-gray-500"></div>
    </button>
  </div>

  <!-- Mobile navbar *-->

  {#if mobileOpen}
    <div
      class="flex flex-col mt-16 absolute top-4 left-0 bg-bgDark1 w-full
        items-center gap-10 pb-10 border-y border-solid border-bgDark3 pt-10 z-40
        "
      transition:fly
    >
      {#each navbarLinks as link}
        <a
          class=" lg:text-base text-2xl leading-6 mr-4 ml-4 2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium transition duration-300 h-full pt-2
           {section.name === link.ariaLabel ? 'text-primaryColor scale-110' : 'text-white hover:scale-110'}"
          href={link.href}
          aria-label={link.ariaLabel}
          on:click={() => mobileOpen = false}
        >
          {link.label}
        </a>
      {/each}
    </div>
  {/if}
</nav>
