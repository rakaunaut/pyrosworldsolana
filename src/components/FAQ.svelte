<script lang="ts">
  import { slide } from "svelte/transition";
  import FadeInComponent from "./FadeInComponent.svelte";

  const FAQData = [
    {
      question: "What's the future for Pyros World?",
      answer:
        "While Pyro's design won't change, we are constantly exploring ways to enhance its features and potential use cases within the evolving metaverse landscape. We are committed to expanding Pyros World beyond Pyro itself. Further innovative projects or expansion stages that leverage the synergy between art, gaming, and the metaverse are not ruled out.",
    },
    {
      question: "What's the future for Pyros World?",
      answer:
        "While Pyro's design won't change, we are constantly exploring ways to enhance its features and potential use cases within the evolving metaverse landscape. We are committed to expanding Pyros World beyond Pyro itself. Further innovative projects or expansion stages that leverage the synergy between art, gaming, and the metaverse are not ruled out.",
    },
    {
      question: "What's the future for Pyros World?",
      answer:
        "While Pyro's design won't change, we are constantly exploring ways to enhance its features and potential use cases within the evolving metaverse landscape. We are committed to expanding Pyros World beyond Pyro itself. Further innovative projects or expansion stages that leverage the synergy between art, gaming, and the metaverse are not ruled out.",
    },
    {
      question: "What's the future for Pyros World?",
      answer:
        "While Pyro's design won't change, we are constantly exploring ways to enhance its features and potential use cases within the evolving metaverse landscape. We are committed to expanding Pyros World beyond Pyro itself. Further innovative projects or expansion stages that leverage the synergy between art, gaming, and the metaverse are not ruled out.",
    },
    {
      question: "What's the future for Pyros World?",
      answer:
        "While Pyro's design won't change, we are constantly exploring ways to enhance its features and potential use cases within the evolving metaverse landscape. We are committed to expanding Pyros World beyond Pyro itself. Further innovative projects or expansion stages that leverage the synergy between art, gaming, and the metaverse are not ruled out.",
    },
  ];

  let moreDetails: number | null = 0;

  function setMoreDetails(i) {
    if (moreDetails === i) {
      moreDetails = null;
    } else {
      moreDetails = i;
    }
  }
</script>

<FadeInComponent sectionName="FAQ">
<section
  id="FAQ"
  class="relative -mt-8 sm:mt-0 pt-12 sm:pt-16 pb-16 bg-blueGray-50 overflow-hidden"
>
  <div
    class="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full"
  >
    <div class="md:max-w-4xl mx-auto">
      <p class="mb-7 block-subtitle text-center">Have any questions?</p>
      <h2 class="mb-16 block-big-title text-center">
        Frequently Asked Questions
      </h2>
      <div class="mb-11 flex items-center flex-wrap -m-1">
        {#each FAQData as data, i}
          <!-- <button class="w-full" on:click={() => setMoreDetails(i)}>
            <div
              class="py-1 sm:py-4 px-3 sm:px-8 rounded-3xl bg-bgDark3 main-border-gray-darker mb-4 relative hover:bg-bgDark3Hover cursor-pointer transition"
            >
              <div class="flex flex-col p-2 justify-center items-start">
                <h3 class=" content-title pt-3 sm:pt-0 pr-8 sm:pr-0">
                  {data.question}
                </h3>
                {#if moreDetails === i}
                  <p
                    class="text-secondaryText text-left pt-4 transition-height duration-300 overflow-hidden"
                    transition:slide
                  >
                    {data.answer}
                  </p>
                {/if}
              </div>
              <div class="absolute top-5 right-4 sm:top-6 sm:right-8">
                <svg
                  width="28px"
                  height="30px"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="transition-all duration-500 
                  {moreDetails === i ? 'rotate-0' : 'rotate-180'}"
                >
                  <path
                    d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
                    stroke="#FFFFFF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </button> -->

          <button    class="w-full py-1 sm:py-4 px-3 sm:px-8 flex justify-between items-start rounded-3xl bg-bgDark3 main-border-gray-darker mb-4 relative hover:bg-bgDark3Hover cursor-pointer transition" on:click={() => setMoreDetails(i)}>
      
              <div class="flex flex-col p-2 justify-center items-start">
                <h3 class=" content-title pt-3 sm:pt-0 pr-8 sm:pr-0">
                  {data.question}
                </h3>
                {#if moreDetails === i}
                  <p
                    class="text-secondaryText text-left pt-4 transition-height duration-300 overflow-hidden"
                    transition:slide
                  >
                    {data.answer}
                  </p>
                {/if}
              </div>
              <div class="mt-4 sm:mt-1">
                <svg
                  width="28px"
                  height="30px"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="transition-all duration-500 
                  {moreDetails === i ? 'rotate-0' : 'rotate-180'}"
                >
                  <path
                    d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
                    stroke="#FFFFFF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
           
          </button>
        {/each}
      </div>
    </div>
  </div>
</section>
</FadeInComponent>