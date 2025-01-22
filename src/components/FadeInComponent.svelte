<script lang="ts">
    import { onMount } from 'svelte';
    import { section } from '../js/section.svelte';

    export let sectionName: string;
    let isVisible = false;
    let element;
  
    onMount(() => {
     
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            isVisible = true;
            section.name = sectionName;
          } else {
            isVisible = false;
          }
        },
        { threshold: 0.25 } // Der Schwellenwert für die Sichtbarkeit (10%)
      );
      
      if (element) {
        observer.observe(element);
      }
      
      return () => observer.disconnect(); // Cleanup wenn das Component entfernt wird
    });

  </script>
  
  <div bind:this={element} class="fade-in {isVisible ? 'visible' : ''}">
    <slot></slot>
  </div>

    <style>
    .fade-in {
      opacity: 0;
      transition: opacity 0.6s ease-in-out;
    }
  
    .visible {
      opacity: 1;
    }
  </style>