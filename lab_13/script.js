document.addEventListener('DOMContentLoaded', async () => {
    const usersContainer = document.getElementById('users-container');
    const API_URL = 'https://dummyjson.com/users';
    const loginModal = document.getElementById('login-modal');
    const closeModal = document.getElementById('close-modal');
    const loginLink = document.getElementById('login-link');
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        data.users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');

            userCard.innerHTML = `
                <img src="${user.image}" alt="${user.firstName}">
                <h2>${user.firstName} ${user.lastName}</h2>
                <p>Age: ${user.age}</p>
                <p>Email: ${user.email}</p>
                <p>Location: ${user.address.city}, ${user.address.state}</p>
            `;

            usersContainer.appendChild(userCard);
        });
    } catch (error) {
        console.error('Error fetching users:', error);
        usersContainer.innerHTML = '<p>Failed to load users. Please try again later.</p>';
    }

    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'flex';
    });

    closeModal.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            const user = data.users.find(
                u => u.username === username && u.password === password
            );

            if (user) {
                localStorage.setItem('loggedInUser', JSON.stringify(user));
                window.location.href = 'user-details.html';
            } else {
                loginError.style.display = 'block';
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    });
});
