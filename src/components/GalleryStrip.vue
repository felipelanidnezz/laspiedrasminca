<template>
  <div class="gallery-strip-wrapper">
    <div class="gallery-header">
      <p class="gallery-tag">{{ lang === 'es' ? 'Galería' : 'Gallery' }}</p>
      <h2 class="gallery-title">{{ lang === 'es' ? 'Cada rincón de Las Piedras' : 'Every Corner of Las Piedras' }}</h2>
      <div class="divider"></div>
    </div>
    
    <div class="gallery-carousel-container">
      <!-- Navigation Left -->
      <button class="nav-btn prev" @click="scroll('left')" aria-label="Previous image">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
      
      <!-- Horizontal Scrollable Container -->
      <div ref="scrollContainer" class="gallery-scroll-container">
        <div 
          v-for="(img, idx) in images" 
          :key="idx" 
          class="gallery-item-card"
        >
          <img :src="img" class="gallery-img" :alt="`Cabañas Las Piedras Minca - hospedaje artesanal en Minca, Santa Marta (imagen ${idx + 1})`" loading="lazy">
        </div>
      </div>
      
      <!-- Navigation Right -->
      <button class="nav-btn next" @click="scroll('right')" aria-label="Next image">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  lang: {
    type: String,
    default: 'es'
  }
})

const scrollContainer = ref(null)

const scroll = (direction) => {
  if (scrollContainer.value) {
    const scrollAmount = direction === 'left' ? -550 : 550
    scrollContainer.value.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    })
  }
}

// 14 highly optimized web images to showcase the full beauty of the place
const images = [
  '/IMG_9835.JPG',
  '/IMG_9838.JPG',
  '/IMG_9839.JPG',
  '/IMG_9840.JPG',
  '/IMG_9841.JPG',
  '/IMG_9847.JPG',
  '/IMG_9850.JPG',
  '/IMG_9858.JPG',
  '/IMG_9860.JPG',
  '/IMG_9865.JPG',
  '/IMG_9869.JPG',
  '/IMG_9884.JPG',
  '/IMG_9890.JPG',
  '/IMG_9902.JPG'
]
</script>

<style lang="scss" scoped>
.gallery-strip-wrapper {
  background: var(--cream);
  padding: clamp(2.5rem, 6vw, 5rem) 0;
  overflow: hidden;
  border-top: 1px solid rgba(201, 168, 76, 0.15);
  border-bottom: 1px solid rgba(201, 168, 76, 0.15);
}

.gallery-header {
  text-align: center;
  margin-bottom: clamp(2rem, 5vw, 3rem);
  padding: 0 clamp(1rem, 4vw, 2rem);

  .gallery-tag {
    font-size: clamp(0.7rem, 1.8vw, 0.78rem);
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 0.8rem;
  }

  .gallery-title {
    font-family: 'Playfair Display', serif;
    font-size: var(--fs-h2);
    color: var(--dark);
    margin-bottom: 1.2rem;
    line-height: 1.15;
    text-wrap: balance;
  }

  .divider {
    width: 60px;
    height: 2px;
    background: linear-gradient(to right, var(--gold), transparent);
    margin: 0 auto;
  }
}

.gallery-carousel-container {
  position: relative;
  width: 100%;
  padding: 0 clamp(0.5rem, 4vw, 4rem);
  display: flex;
  align-items: center;
}

.gallery-scroll-container {
  display: flex;
  flex-direction: row;
  gap: clamp(12px, 2vw, 24px);
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-x: contain;
  padding: 1.5rem 0.5rem;
  width: 100%;

  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }

  /* Desktop hover dimming */
  @media (hover: hover) and (pointer: fine) {
    &:hover .gallery-item-card { opacity: 0.7; }
  }
}

.gallery-item-card {
  flex: 0 0 auto;
  height: clamp(220px, 45vw, 480px);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(26, 19, 13, 0.08);
  border: 1px solid rgba(201, 168, 76, 0.15);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  background: #fcfaf7;
  scroll-snap-align: center;

  &:hover {
    opacity: 1 !important;
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 45px rgba(26, 19, 13, 0.18);
    border-color: var(--gold);
  }
}

.gallery-img {
  height: 100%;
  width: auto;
  object-fit: contain;
  display: block;
  pointer-events: none;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: white;
  border: 1px solid rgba(201, 168, 76, 0.25);
  color: var(--dark);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 4px 15px rgba(26, 19, 13, 0.08);
  transition: all 0.3s ease;
  
  svg {
    width: 22px;
    height: 22px;
    color: var(--dark);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background: var(--stone);
    border-color: var(--stone);
    color: var(--cream);
    box-shadow: 0 8px 25px rgba(26, 19, 13, 0.15);
    
    svg {
      color: var(--cream);
    }
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
  }
  
  &.prev {
    left: 2rem;
    &:hover svg {
      transform: translateX(-2px);
    }
  }
  
  &.next {
    right: 2rem;
    &:hover svg {
      transform: translateX(2px);
    }
  }
}

@media (max-width: 900px) {
  .nav-btn {
    width: 44px;
    height: 44px;
    svg { width: 18px; height: 18px; }
    &.prev { left: 0.5rem; }
    &.next { right: 0.5rem; }
  }
}

@media (max-width: 640px) {
  .nav-btn { display: none; }
}
</style>
