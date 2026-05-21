<template>
  <div class="float-buttons-container">
    <!-- WhatsApp Button -->
    <div class="whatsapp-container">
      <div class="whatsapp-popup">
      <strong>{{ lang === 'es' ? '👋 ¡Hola! ¿Listo para tu próxima aventura?' : '👋 Hi! Ready for your next adventure?' }}</strong>
        <p>{{ lang === 'es' ? 'Te respondemos en minutos 🚀' : 'We reply in minutes 🚀' }}</p>
      </div>
      <a href="https://wa.me/573001234567" target="_blank" rel="noopener" class="whatsapp-float" aria-label="Abrir WhatsApp para contactar">
        <svg class="whatsapp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3.2 496l133-34.9c32.7 17.8 69.4 27.2 107.2 27.2 122.4 0 222-99.6 222-222 0-59.3-23-115.1-64.9-157.1zM223.9 448c-33.2 0-65.7-8.9-94-25.7l-6.7-4-79.8 20.9 21.3-77.8-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.7-186.6 184.7zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
        <span class="whatsapp-text">{{ lang === 'es' ? '¿Hablamos?' : 'Lets talk!' }}</span>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  lang: String
})
</script>

<style lang="scss" scoped>
// Outer wrapper that stacks both buttons vertically
.float-buttons-container {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.75rem;
}

// Instagram circular icon button
.instagram-float {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
  color: white;
  text-decoration: none;
  box-shadow: 0 8px 24px rgba(214, 36, 159, 0.35);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 12px 30px rgba(214, 36, 159, 0.55);
  }

  &:active {
    transform: translateY(-1px) scale(1);
  }
}

.insta-icon {
  width: 24px;
  height: 24px;
  color: white;
}

// WhatsApp inner container (popup + pill button)
.whatsapp-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
}

.whatsapp-popup {
  background: white;
  padding: 1rem 1.2rem;
  border-radius: 12px;
  max-width: 260px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  margin-bottom: 5px;
  
  strong {
    display: block;
    color: #333;
    font-weight: 600;
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
    font-family: 'Cormorant Garamond', serif;
  }
  
  p {
    color: #333;
    font-size: 0.9rem;
    margin: 0;
    line-height: 1.5;
    font-family: 'Cormorant Garamond', serif;
  }
}

.whatsapp-container:hover .whatsapp-popup,
.whatsapp-container:focus-within .whatsapp-popup {
  opacity: 1;
  visibility: visible;
}

.whatsapp-float {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #25d366; // Solid official WhatsApp green
  border-radius: 50px;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 1.05rem;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 8px 24px rgba(37, 211, 102, 0.35); // Soft green shadow matching the screenshot
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: none;
  cursor: pointer;
  gap: 0.6rem;
  padding: 0 1.6rem;
  height: 52px;
  
  &:hover {
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 12px 30px rgba(37, 211, 102, 0.5);
    background: #20ba5a; // Slightly deeper premium green on hover
  }

  &:active {
    transform: translateY(-1px) scale(1);
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
  }
}

.whatsapp-icon {
  width: 24px;
  height: 24px;
  color: white;
}

.whatsapp-text {
  letter-spacing: 0.2px;
}

@media (max-width: 600px) {
  .float-buttons-container {
    bottom: 1.5rem;
    right: 1.5rem;
  }

  .instagram-float {
    width: 44px;
    height: 44px;
  }

  .insta-icon {
    width: 20px;
    height: 20px;
  }
  
  .whatsapp-float {
    height: 46px;
    font-size: 0.95rem;
    padding: 0 1.3rem;
  }
  
  .whatsapp-icon {
    width: 20px;
    height: 20px;
  }
}

@media (hover: none) {
  .whatsapp-popup {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
