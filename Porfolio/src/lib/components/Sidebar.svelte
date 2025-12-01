<script>
  import { sidebarOpen, currentExample, examples } from '../stores/navigation'
  
  function toggleNavbar() {
    sidebarOpen.update(state => !state)
  }
  
  function closeNavbar() {
    sidebarOpen.set(false)
  }
  
  function selectExample(id) {
    currentExample.set(id)
    // Chiudi navbar dopo la selezione
    sidebarOpen.set(false)
  }
  
  function goHome() {
    currentExample.set('home')
    sidebarOpen.set(false)
  }
  
  function handleOverlayClick() {
    sidebarOpen.set(false)
  }
</script>

<!-- Overlay quando navbar è aperta -->
{#if $sidebarOpen}
  <button
    class="fixed inset-0 bg-white/5 backdrop-blur-sm z-20 cursor-default"
    on:click={handleOverlayClick}
    aria-label="Chiudi navbar"
    tabindex="-1"
  ></button>
{/if}

<!-- Floating Navbar -->
<nav 
  class="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 
         bg-[#3d4e3d]/90 backdrop-blur-lg
         rounded-2xl shadow-2xl
         border border-white/20
         transform transition-all duration-300 ease-in-out
         max-w-[95vw] w-auto
         {$sidebarOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}"
>
  <div class="flex items-center gap-2 sm:gap-4 px-3 sm:px-6 py-2 sm:py-3 overflow-x-auto scrollbar-hide">
    <!-- Home button -->
    <button
      type="button"
      on:click={goHome}
      class="px-3 sm:px-4 py-2 rounded-2xl hover:bg-[#3d4e3d]/90 transition-colors text-white  text-sm  whitespace-nowrap flex-shrink-0"
    >
      <span class="hidden sm:inline">Home</span>
    </button>
    
    <!-- Separator -->
    <div class="w-px h-6 sm:h-8 bg-white/20 flex-shrink-0"></div>
    
    <!-- Navigation items -->
    <div class="flex items-center gap-1 sm:gap-2">
      {#each examples as example}
        <button
          type="button"
          on:click={() => selectExample(example.id)}
          class="px-3 sm:px-4 py-2 rounded-2xl transition-colors text-gray-300 hover:bg-[#4E5F4E] hover:text-white whitespace-nowrap flex-shrink-0 {$currentExample === example.id ? 'bg-[#2F3C2F] text-white' : ''}"
        >
          <span class="text-xs sm:text-sm">{example.name}</span>
        </button>
      {/each}
    </div>
    
    <!-- Separator -->
    <div class="w-px h-6 sm:h-8 bg-white/20 flex-shrink-0"></div>
    
    <!-- Close button -->
    <button
      type="button"
      on:click={closeNavbar}
      class="p-2 rounded-2xl text-gray-300 hover:bg-[#4E5F4E] hover:text-white flex-shrink-0"
      aria-label="Chiudi navbar"
    >
      <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  </div>
</nav>

<style>
  /* Nascondi scrollbar ma mantieni lo scroll */
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
</style>

<!-- Toggle button fluttuante (apri navbar) - SEMPRE VISIBILE quando chiusa -->
{#if !$sidebarOpen}
  <button
    type="button"
    on:click={toggleNavbar}
    class="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 p-3 rounded-2xl
          bg-[#3d4e3d]/90
          hover:bg-[#4E5F4E]/90 
          text-white 
          border border-white/40 
          transition-all transform hover:scale-110 active:scale-95"
    aria-label="Apri navbar"
  >
    <svg class="w-[35px] h-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
    </svg>
  </button>
{/if}