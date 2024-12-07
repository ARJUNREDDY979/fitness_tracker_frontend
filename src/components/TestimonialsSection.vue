<template>
  <h2>What Our Members Say</h2>
  <div class="testimonials-row">
    <!-- Testimonial 1 -->
    <div class="testimonial-card">
      <img src="https://www.thehealthjournals.com/wp-content/uploads/2016/03/Sarah.jpg" alt="Sarah">
      <blockquote>"The best gym experience I've ever had!"</blockquote>
      <p>- Sarah</p>
    </div>
    <!-- Testimonial 2 -->
    <div class="testimonial-card">
      <img src="https://i.tribune.com.pk/media/images/943766-john-1440403091/943766-john-1440403091.jpg" alt="John">
      <blockquote>"The trainers are amazing and motivating!"</blockquote>
      <p>- John</p>
    </div>
    <!-- Testimonial 3 -->
    <div class="testimonial-card">
      <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/2-model-emily-working-out-in-gym-dan-friend.jpg" alt="Emily">
      <blockquote>"I love the group classes, so much fun!"</blockquote>
      <p>- Emily</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialsSection',
};
</script>

<style scoped>
.testimonials-row {
  display:grid;
  grid-template-columns:repeat(3, 1fr); /* Display all testimonials in one row */
  gap:20px;
  justify-content:center;
  align-items:center;
}

.testimonial-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.testimonial-card img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 15px;
  border: 2px solid #1e3a8a;
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

</style>
