<template>
  <section id="map-section" class="map-section">
    <p class="section-tag">{{ lang === 'es' ? 'Ubicación' : 'Location' }}</p>
    <h2 class="section-title">
      {{ lang === 'es' ? 'Un oasis escondido en Minca' : 'A hidden oasis in Minca' }}
    </h2>
    <div class="divider"></div>
    
    <div class="map-container-grid">
      <!-- Google Map Card -->
      <div class="map-card">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1957.3082946877842!2d-74.12042406118819!3d11.1419063789129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8ef4f129819389d3%3A0x9f9e3a171b198b5!2sMinca%2C%20Santa%20Marta%2C%20Magdalena!3m2!1d11.142812!2d-74.116677!4m5!1s0x8ef4f1c15ae87db1%3A0xcc21f55f6b2e4566!2sCaba%C3%B1a%20Las%20Piedras%2C%20Minca%2C%20Santa%20Marta%2C%20Magdalena!3m2!1d11.140182!2d-74.1215962!5e0!3m2!1ses-419!2sco!4v1779132037350!5m2!1ses-419!2sco" 
          width="100%" 
          height="100%" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          class="google-map-iframe"
        ></iframe>
      </div>
      
      <!-- Instructions Card -->
      <div class="instructions-card">
        <div class="instruction-block">
          <h3>📍 {{ lang === 'es' ? 'Dirección' : 'Address' }}</h3>
          <p><strong>Cabaña Las Piedras</strong> — Sector Milagro Verde (Carrera 4ª), Minca, Santa Marta, Magdalena, Colombia</p>
        </div>
        
        <div class="instruction-block">
          <h3>🌿 {{ lang === 'es' ? 'El Entorno' : 'The Surroundings' }}</h3>
          <p>{{ lang === 'es' ? 'Ubicado a orillas del río Minca, rodeado de selva tropical y montañas de la Sierra Nevada. Un refugio ideal alejado del ruido, pero con fácil acceso.' : 'Located on the banks of the Minca River, surrounded by tropical rainforest and mountains of the Sierra Nevada. An ideal refuge away from the noise, but easily accessible.' }}</p>
        </div>
        
        
        <div class="map-link-btn-container">
          <a 
            href="https://maps.app.goo.gl/qYKQgCkCv5CnLfu37" 
            target="_blank" 
            rel="noopener" 
            class="map-btn"
          >
            <span>{{ lang === 'es' ? 'Abrir en Google Maps' : 'Open in Google Maps' }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  lang: String
})
</script>

<style lang="scss" scoped>
.map-section {
  padding: clamp(3rem, 7vw, 5rem) clamp(1rem, 4vw, 3rem);
  background: var(--cream);
  text-align: center;
  border-top: 1px solid rgba(201, 168, 76, 0.15);

  .section-tag {
    font-size: clamp(0.7rem, 1.8vw, 0.78rem);
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1rem;
  }

  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: var(--fs-h2);
    color: var(--dark);
    margin-bottom: 1.5rem;
    line-height: 1.15;
    text-wrap: balance;
  }

  .divider {
    width: 60px;
    height: 2px;
    background: linear-gradient(to right, var(--gold), transparent);
    margin: 0 auto clamp(2rem, 5vw, 3rem);
  }
}

.map-container-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: clamp(1.5rem, 4vw, 3rem);
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
}

.map-card {
  height: clamp(280px, 50vw, 480px);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(201, 168, 76, 0.25);
  box-shadow: 0 15px 40px rgba(26, 19, 13, 0.08);

  .google-map-iframe {
    width: 100%;
    height: 100%;
    display: block;
  }
}

.instructions-card {
  background: #fcfaf7;
  padding: clamp(1.4rem, 3.5vw, 2.5rem);
  border-radius: 12px;
  border: 1px solid rgba(201, 168, 76, 0.15);
  box-shadow: 0 10px 30px rgba(26, 19, 13, 0.04);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.2rem;
}

.instruction-block {
  margin-bottom: clamp(1rem, 3vw, 1.8rem);

  &:last-of-type {
    margin-bottom: clamp(1rem, 3vw, 2rem);
  }

  h3 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.05rem, 2.8vw, 1.25rem);
    color: var(--stone);
    margin-bottom: 0.5rem;
    line-height: 1.3;
  }

  p {
    font-size: var(--fs-small);
    line-height: 1.6;
    color: rgba(26, 19, 13, 0.8);
    text-wrap: pretty;
  }
}

.map-link-btn-container {
  width: 100%;
}

.map-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: var(--stone);
  color: var(--cream) !important;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 600;
  font-size: clamp(0.9rem, 2.4vw, 1rem);
  padding: clamp(0.85rem, 2.4vw, 1rem) 1.5rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  border: 1px solid var(--stone);
  min-height: 50px;
  line-height: 1.2;

  &:hover, &:focus-visible {
    background: var(--gold);
    border-color: var(--gold);
    color: var(--dark) !important;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(201, 168, 76, 0.25);
  }

  &:active { transform: translateY(0); }
}

@media (max-width: 900px) {
  .map-container-grid {
    grid-template-columns: 1fr;
  }
}
</style>
