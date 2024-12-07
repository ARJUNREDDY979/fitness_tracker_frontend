<template>
  <div id="app">
  <MyHeader/>

    <!-- Hero Section -->
    <div id="home" class="hero">
      <HeroSection />
    </div>

    <!-- Services Section -->
    <div id="services" class="services">
      <ServicesSection />
    </div>

    <div>
    <div id="app">
      <!-- Membership Plans Section -->
      <div id="plans" class="plans-section">
          <MembershipSection />
      </div>
    </div>
</div>
<div id="testimonials-section" class="testimonials-section">
  <TestimonialsSection />
</div>
</div>
    <!-- Fitness Tracker Data Section -->
    <div id="fitness-data" class="fitness-data">
      <h2>Fitness Tracker</h2>
      <FitnessBox :activities="fitnessData" />
    </div>

    <!-- Contact Us Section -->
    <div id="contact-section" class="contact-section">
      <ContactSection />
    </div>

</template>

<script>
import MyHeader from './components/MyHeader.vue';
import FitnessBox from './components/FitnessBox.vue';
import ServicesSection from './components/ServicesSection.vue';
import MembershipSection from './components/MembershipSection.vue';
import HeroSection from './components/HeroSection.vue';
import TestimonialsSection from './components/TestimonialsSection.vue';
import ContactSection from './components/ContactSection.vue';
export default {
  components:{MyHeader,HeroSection ,FitnessBox, ServicesSection, MembershipSection, TestimonialsSection, ContactSection},
  data() {
    return {
      fitnessData: [],
    };
  },
  async mounted() {
    try {
      const response = await fetch('https://fitness-tracker-backend-105q.onrender.com/api');
      const data = await response.json();
      this.fitnessData = data.fitness_tracker;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
};
</script>

<style scoped>
/* General Styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  background-color: #f4f4f9;
}

.hero {
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url('https://sportsfacilities.com/wp-content/uploads/2016/12/Innovative-Fitness-1024x683.jpeg') no-repeat center center/cover;
  padding: 100px 20px;
  color: white;
}

.services {
  background-color: #f3f4f6;
  padding: 20px;
  margin: 5px;
}

.service-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns for larger screens */
  gap: 10px;
  margin: 10px;
}

.card img {
  width: 300px;
  height: 250px;
  border-radius: 2px;
  margin: 15px;
}

.plans-section {
  padding: 30px;
  background-color: lightgreen; 
}

/* Testimonials Section */
.testimonials-section {
  padding:40px 20px;
  background-color:lightgrey; 
}


blockquote {
  font-style: italic;
  color: #555;
  margin: 10px 0;
}

p {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}
/* Fitness Tracker Section */
.fitness-data {
  text-align: center;
  padding: 40px 20px;
  background-color: #adabab;
}

.fitness-data h2 {
  font-size: 24px;
  color: #303134;
  margin-bottom: 20px;
}

.contact-section {
  display: grid; /* Use CSS Grid */
  grid-template-columns: 1fr 1fr; /* Two equal columns for larger screens */
  grid-template-areas: 
    "info contact"; /* Horizontal layout by default */
  gap: 20px;
  padding: 50px;
  background-color: #f4f4f9; /* Light background color */
}

/* Responsive Design */
@media (max-width: 768px) {
  .navbar {
  grid-template-columns: 1fr ;
}

.contact-section {
    grid-template-columns: 1fr;
    grid-template-areas: 
      "info" 
      "contact"; /*information on top and contact at the bottom */
    gap: 20px; /* Add spacing between items */
  }
  .service-cards {
    grid-template-columns: 1fr; 
  }
  .plan-row {
  grid-template-columns: 1fr;
  gap: 20px;
  justify-items: center;
  align-items: center;
}
  .card img {
    width: 100%; 
    height: auto; 
    margin: 0; 
  }

}
</style>