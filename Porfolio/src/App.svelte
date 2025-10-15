<script>
  import Sidebar from './lib/components/Sidebar.svelte'
  import { currentExample } from './lib/stores/navigation'
  
  import Home from './lib/pages/home/Home.svelte'
  import Coding from './lib/pages/coding/Coding.svelte';
import Grafica from './lib/pages/grafica/Grafica.svelte';
  import Istruzione from './lib/pages/istruzione/Istruzione.svelte';
  import Contatti from './lib/pages/contatti/Contatti.svelte';

  
  const components = {
    home: Home,
    coding: Coding,
  }
</script>

<div class="flex h-screen overflow-hidden">
  <Sidebar />
  
  <main class="flex-1 overflow-auto">
    {#if $currentExample === 'home'}
      <Home />
    {:else if $currentExample === 'coding'}
      <Coding />
   {:else if $currentExample === 'grafica'}
      <Grafica />
      {:else if $currentExample === 'istruzione'}
      <Istruzione />
      {:else if $currentExample === 'contatti'}
      <Contatti />

    {:else}
      <Home />
    {/if}
  </main>
</div>