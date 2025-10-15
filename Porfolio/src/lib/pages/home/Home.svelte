<script>
  import imgMio from '../../../img/imgMio.png';
  import { onMount } from 'svelte';
  
  let loaded = false;
  let mouseX = 0;
  let mouseY = 0;
  
  onMount(() => {
    setTimeout(() => {
      loaded = true;
    }, 100);

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  });
</script>

<div class="min-h-screen bg-[#3d4f3d] relative overflow-hidden flex items-center justify-center p-4 sm:p-8 lg:p-12">
  <!-- Grid Background Animato -->
  <div
    class="absolute inset-0 opacity-10 pointer-events-none"
    style="
      background-image:
        linear-gradient(#fff 1px, transparent 1px),
        linear-gradient(90deg, #fff 1px, transparent 1px);
      background-size: 30px 30px;
      animation: gridMove 20s linear infinite;
    "
  ></div>



  <!-- Hero Card -->
  <div 
    class="relative max-w-5xl w-full transition-all duration-1000 ease-custom delay-300" 
    class:loaded
    style="transform: perspective(1000px) rotateX({mouseY * 0.05}deg) rotateY({mouseX * 0.05}deg);"
  >
    
    <!-- Card con X Split -->
    <div class="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-500 ease group hover:scale-[1.01] hover:shadow-[0_35px_60px_-15px_rgba(254,175,17,0.2)] h-[500px] sm:h-[600px] lg:h-[650px]">
      
      <!-- Verde top left -->
      <div 
        class="absolute inset-0 bg-gradient-to-br from-[#2d3f2d] to-[#3d4f3d] transition-all duration-700" 
        style="clip-path: polygon(0 0, 60% 0, 0 60%);"
      ></div>
      
      <!-- Giallo top right con animazione -->
      <div 
        class="absolute inset-0 bg-gradient-to-br from-[#FEAF11] to-[#f59e0b] animate-pulse-subtle" 
        style="clip-path: polygon(60% 0, 100% 0, 100% 60%);"
      ></div>
      
      <!-- Giallo bottom left -->
      <div 
        class="absolute inset-0 bg-gradient-to-br from-[#f59e0b] to-[#FEAF11]" 
        style="clip-path: polygon(0 60%, 40% 100%, 0 100%);"
      ></div>
      
      <!-- Verde bottom right con animazione -->
      <div 
        class="absolute inset-0 bg-gradient-to-br from-[#3d4f3d] to-[#2d3f2d] animate-pulse-subtle-delayed" 
        style="clip-path: polygon(100% 60%, 100% 100%, 40% 100%);"
      ></div>

      <!-- Glow effect centrale -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-[#FEAF11] rounded-full opacity-10 blur-3xl animate-glow"></div>

      <!-- Contenuto -->
      <div class="relative h-full flex flex-col">
        
        <!-- Testo centrato - Responsive -->
        <div class="absolute top-4 sm:top-0 left-[5%] sm:left-[7%] flex items-start sm:items-center justify-center z-10 w-[90%] sm:w-auto">
          <h1 class="text-4xl sm:text-6xl md:text-7xl lg:text-[10rem] font-black leading-[1.1] sm:leading-[1] text-white drop-shadow-2xl text-left sm:text-center tracking-tight animate-text-slide">
             <div class="animate-text-slide-1">PORTFOLIO</div>
             <div class="sm:block animate-text-slide-2">PORTFOLIO</div>
             <div class=" md:block animate-text-slide-3">PORTFOLIO</div>
          </h1>
        </div>

        <!-- Sezione immagine - Responsive -->
        <div class="absolute inset-0 flex items-end sm:items-center justify-center z-20 pb-20 sm:pb-6">
          <div class="relative h-[80%] sm:h-[75%] flex items-center justify-center">
            <img
              src={imgMio}
              alt="Portfolio"
              class="h-full w-auto object-contain drop-shadow-2xl transition-all duration-500 ease-in-out group-hover:scale-105"
            />
            
            <!-- Cerchio decorativo dietro l'immagine -->
            <div class="absolute inset-0 flex items-center justify-center -z-10">
              <div class="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-[#FEAF11]/20 to-transparent animate-spin-slow"></div>
            </div>
          </div>
        </div>
        
        <!-- Barra inferiore - Responsive -->
        <div class="absolute bottom-0 left-0 right-0 z-30 flex items-center justify-center gap-3 sm:gap-6 bg-black/95 backdrop-blur-md h-16 sm:h-20 lg:h-28 border-t border-white/10">
         
        
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .ease-custom {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .loaded {
    opacity: 1;
    transform: translateY(0) rotateX(0deg);
  }

  :global(body) {
    margin: 0;
    padding: 0;
  }

  @keyframes gridMove {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(50px, 50px);
    }
  }


  @keyframes glow {
    0%, 100% {
      opacity: 0.1;
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      opacity: 0.2;
      transform: translate(-50%, -50%) scale(1.2);
    }
  }

  @keyframes float-image {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes text-slide {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes pulse-subtle {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.9;
    }
  }

  .animate-glow {
    animation: glow 4s ease-in-out infinite;
  }



  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
  }

  .animate-text-slide {
    animation: text-slide 0.8s ease-out;
  }

  .animate-text-slide-1 {
    animation: text-slide 0.8s ease-out 0.1s backwards;
  }

  .animate-text-slide-2 {
    animation: text-slide 0.8s ease-out 0.2s backwards;
  }

  .animate-text-slide-3 {
    animation: text-slide 0.8s ease-out 0.3s backwards;
  }

  .animate-pulse-subtle {
    animation: pulse-subtle 3s ease-in-out infinite;
  }

  .animate-pulse-subtle-delayed {
    animation: pulse-subtle 3s ease-in-out infinite 1.5s;
  }

  @media (max-width: 640px) {
    @keyframes gridMove {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(30px, 30px);
      }
    }
  }
</style>