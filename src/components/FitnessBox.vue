<template>
  <div>
    <h2>Workout Activities</h2>
    <div v-if="activities && activities.length" class="activities-container">
      <section
        v-for="activity in activities"
        :key="activity.id"
        class="activity-item"
      >
      <img :src=activity.image alt="image" class="user-image">
        <p><strong>User:</strong> {{ activity.user_name }}</p>
        <p><strong>Workout Type:</strong> {{ activity.workout_type }}</p>
        <p><strong>Duration:</strong> {{ activity.duration_minutes }} minutes</p>
        <p><strong>Calories Burned:</strong> {{ activity.calories_burned }}</p>
        <p><strong>Date:</strong> {{ activity.date }}</p>
    </section>
    </div>
    <p v-else>No workout activities found.</p>
  </div>
</template>

<script>
export default {
  props: {
    activities: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
#app {
  text-align: center;
  font-family: Arial, sans-serif;
  color: #e5e6e8; 
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #cba3a3; 
}

.FitnessBox {
  background-color: #f8f9fa; /* Light grey background */
  padding: 20px;
  border-radius: 8px;
  margin: 20px auto;
  max-width: 800px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.activity-item {
  margin-bottom: 10px;
  background: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.activities-container{
  display: grid;
  grid-template-columns: repeat(5,1fr); /* Two cards per row */
  gap: 20px;
  justify-content: center;
  align-items: center;
}
.user-image {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 15px;
    border: 2px solid #1e3a8a;
}
</style>
