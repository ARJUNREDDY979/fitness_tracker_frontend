<template>
      <h2>Our Services</h2>
      <div class="service-cards">
        <div class="card">
          <img src="https://wellyx.com/wp-content/uploads/2022/04/Choosing-the-List-of-Essential-Equipment-for-Your-Gym-1024x372.jpg" alt="Gym Equipment" />
          <p>State-of-the-art Gym Equipment</p>
        </div>
        <div class="card">
          <img src="https://hips.hearstapps.com/hmg-prod/images/mh-trainer-2-1533576998.png?resize=1200:*" alt="Personal Training" />
          <p>Personal Training Programs</p>
        </div>
        <div class="card">
          <img src="https://www.beckwithhealthclub.co.uk/wp-content/uploads/2018/12/Barbell_Group_Fitness_Class2-e1545048979474.jpg" alt="Group Classes" />
          <p>Group Classes (Yoga, Zumba)</p>
        </div>
        <div class="card">
          <img src="https://www.arcare.net/wp-content/uploads/2020/08/nutrition-Counseling.jpg" alt="Nutrition Counseling" />
          <p>Nutrition Counseling</p>
        </div>
      </div>
</template>
  
  <script>
  export default {
    name: 'ServicesSection',
  };
  </script>
  
  <style scoped>
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

.card{
    width: 100%;
}

.card img {
  width: 100%;
  height: 250px;
  border-radius: 2px;
  margin: 15px 0;
}

@media (max-width: 768px) {
  .service-cards {
    grid-template-columns: 1fr; 
  }
  .card img {
    width: 100%; 
    height: auto; 
    margin: 0; 
  }

}
  </style>
  