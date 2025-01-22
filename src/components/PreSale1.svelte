<script lang="ts">

import FadeInComponent from "./FadeInComponent.svelte";

export let img: string;

</script>

<FadeInComponent sectionName="presale">
    <section
      class="w-full bg-bgDark1 pt-24 mb-8 sm:mb-24"
      id="pre-sale"
    >

        <div class="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto sm:pl-4 xl:pr-16 xl:pl-16">
          <div class="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div class="mx-auto lg:mx-auto w-11/12 sm:w-4/5 lg:w-unset">
              <span class="block-subtitle">Take your chance</span>
              <h2 class="mt-6 mb-8 text-4xl lg:text-5xl block-big-title uppercase">
               Mega token <br/>pre-sale
              </h2>
              <p class="mb-10 text-secondaryText leading-loose">
              Buy $PYRO Tokens to gear up
for the next level of P2E.

100M PYRO (10%) will be allocated among token pre-Sale participants.
              </p>
              <button
              class="w-[210px] h-12 contained-button mr-10 "
              aria-label="Get started"
            >
              Go to Pre-Sale
            </button>

            </div>
          </div>
          <div class="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
          <div class="mb-4 py-3 pl-3 pr-2 rounded-lg ">
                <img
                  src={img}
                  alt="pyro"
                  class="w-8/12 h-auto"
                  aria-label="pyro"
                />
              </div>

          </div>
        </div>

    </section>
  </FadeInComponent>