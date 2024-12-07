<template>
  <!-- Fitness Information -->
  <div class="info-box">
    <h2>About Fitness Center</h2>
    <p>
      Here, we help you achieve your health goals with modern equipment and expert trainers.
    </p>
    <ul>
      <li>State-of-the-art gym equipment</li>
      <li>Personalized fitness programs</li>
      <li>Flexible membership plans</li>
      <li>Open 7 days a week</li>
    </ul>
  </div>

  <!-- Contact Us Form -->
  <div class="contact-form-container" id="contact">
    <h2>Contact Us</h2>
    <form class="contact-form">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" placeholder="Write your message" required></textarea>
      </div>
      <button type="submit" class="submit-button">Send Message</button>
    </form>
  </div>
  </template>
  
  <script>
  export default {
    name: 'ContactSection',
  };
  </script>
  
  <style scoped>
.info-box {
  grid-area: info; /* Assign to the 'info' area */
  background-color: #e7f9f7;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.info-box h2 {
  font-size: 24px;
  color: #1e3a8a;
  margin-bottom: 15px;
}

.info-box p {
  font-size: 16px;
  color: #333;
  margin-bottom: 15px;
}

.info-box ul {
  list-style-type: none;
  padding: 0;
}

.info-box li {
  font-size: 16px;
  margin: 5px 0;
  color: #555;
}

/* Right Section: Contact Us Form */
.contact-form-container {
  grid-area: contact; /* Assign to the 'contact' area */
  background-color: #fce4ec; /* Light pink background */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Light shadow */
}

.contact-form-container h2 {
  font-size: 24px;
  color: #d81b60;
  margin-bottom: 15px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.form-group label {
  margin-bottom: 5px;
  font-weight: bold;
}

.contact-form input,
.contact-form textarea {
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
}

.contact-form textarea {
  resize: vertical;
  height: 100px;
}

.submit-button {
  background-color: #d81b60;
  color: white;
  border: none;
  padding: 15px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #ad1457;
}

  
  </style>
  