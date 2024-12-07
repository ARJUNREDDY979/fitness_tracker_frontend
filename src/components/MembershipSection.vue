<template>
      <h2>Membership Plans</h2>
      <div class="plan-row">
        <div class="plan-card basic">
          <h3>Basic Plan</h3>
          <p>$29.99/month</p>
          <p>Access to gym facilities</p>
        </div>
        <div class="plan-card premium">
          <h3>Premium Plan</h3>
          <p>$49.99/month</p>
          <p>Includes group classes</p>
        </div>
        <div class="plan-card vip">
          <h3>VIP Plan</h3>
          <p>$79.99/month</p>
          <p>All-inclusive access</p>
        </div>
      </div>
</template>

<script>
export default {
  name: 'MembershipSection',
};
</script>

<style scoped>
.plans-section {
  padding: 30px;
  background-color: lightgreen; 
}
.plan-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
  align-items: center;
}
.plan-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.plan-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}
.plan-card img {
  width: 100px;
  height: auto;
  margin-bottom: 15px;
}
.plan-card h3 {
  font-size: 20px;
  color: #070c19;
  margin-bottom: 10px;
}
.plan-card p {
  font-size: 16px;
  color: #201919;
}
.basic {
  background-color: rgb(215, 203, 194); 
}
.premium {
  background-color: lightblue; 
}
.vip {
  background-color: lightpink; 
}
@media (max-width: 768px) {
 
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
