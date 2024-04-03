// Dummy pizza data
const pizzaData = [
  { name: 'Margherita', base: 'Thin Crust', sauce: 'Tomato', cheese: 'Mozzarella', veggies: ['Tomatoes', 'Basil'] },
  { name: 'Pepperoni', base: 'Classic', sauce: 'Tomato', cheese: 'Mozzarella', veggies: [] },
  { name: 'Vegetarian', base: 'Whole Wheat', sauce: 'Pesto', cheese: 'Feta', veggies: ['Bell Peppers', 'Olives', 'Onions'] },
  { name: 'BBQ Chicken', base: 'Thick Crust', sauce: 'BBQ', cheese: 'Cheddar', veggies: ['Chicken', 'Red Onions', 'Cilantro'] },
  { name: 'Hawaiian', base: 'Regular', sauce: 'Tomato', cheese: 'Provolone', veggies: ['Ham', 'Pineapple'] }
];

// Simulated admin credentials
const adminUsername = 'Hari';
const adminPassword = 'Hari@99';

// Function to simulate user login
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === adminUsername && password === adminPassword) {
    // Admin login
    showAdminDashboard();
  } else if (localStorage.getItem('loggedInUser')) {
    // User already logged in
    showUserDashboard();
  } else {
    alert('Invalid username or password');
  }
}

// Function to simulate user logout
function logout() {
  localStorage.removeItem('loggedInUser');
  showLoginForm();
}

// Function to display the admin dashboard
function showAdminDashboard() {
  // Simulated admin dashboard HTML
  const adminDashboardHTML = `
    <h2>Welcome Admin</h2>
    <p>Manage your pizza inventory here.</p>
    <div id="inventory"></div>
  `;
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('pizzaOptions').classList.add('hidden');
  document.body.insertAdjacentHTML('beforeend', adminDashboardHTML);
  displayInventory();
}

// Function to display the user dashboard
function showUserDashboard() {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  let userDashboardHTML = `
    <h2>Welcome ${loggedInUser.username}</h2>
    <p>Choose from our delicious pizza varieties:</p>
    <ul id="pizzaList"></ul>
    <button onclick="logout()">Logout</button>
  `;
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('pizzaOptions').classList.remove('hidden');
  document.getElementById('pizzaOptions').innerHTML = userDashboardHTML;

  // Display pizza varieties
  const pizzaList = document.getElementById('pizzaList');
  pizzaData.forEach(pizza => {
    const listItem = document.createElement('li');
    listItem.textContent = `${pizza.name} - ${pizza.base}, ${pizza.sauce}, ${pizza.cheese}, ${pizza.veggies.join(', ')}`;
    pizzaList.appendChild(listItem);
  });
}

// Function to display the login form
function showLoginForm() {
  document.getElementById('loginForm').classList.remove('hidden');
  document.getElementById('pizzaOptions').classList.add('hidden');
}

// Simulate initial login check
if (localStorage.getItem('loggedInUser')) {
  showUserDashboard();
} else {
  showLoginForm();
}

// Simulated inventory data
const inventoryData = {
  pizzaBase: ['Thin Crust', 'Classic', 'Whole Wheat', 'Thick Crust', 'Regular'],
  sauce: ['Tomato', 'Pesto', 'BBQ'],
  cheese: ['Mozzarella', 'Feta', 'Cheddar', 'Provolone'],
  veggies: ['Tomatoes', 'Basil', 'Bell Peppers', 'Olives', 'Onions', 'Chicken', 'Red Onions', 'Cilantro', 'Ham', 'Pineapple']
};

// Function to display inventory in admin dashboard
function displayInventory() {
  const inventoryDiv = document.getElementById('inventory');
  let inventoryHTML = '<h3>Inventory</h3>';
  for (let category in inventoryData) {
    inventoryHTML += `<p><strong>${category}:</strong> ${inventoryData[category].join(', ')}</p>`;
  }
  inventoryDiv.innerHTML = inventoryHTML;
}
