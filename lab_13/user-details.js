document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));

    if (!user) {
        document.body.innerHTML = '<p>No user logged in. Please login first.</p>';
        return;
    }
    const userDetails = document.getElementById('user-details');
    userDetails.innerHTML = `
        <div class="user-details-card">
            <h2>${user.firstName} ${user.lastName}</h2>
            <img src="${user.image}" alt="${user.firstName}">
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Age:</strong> ${user.age}</p>
            <p><strong>Address:</strong> ${user.address.city}, ${user.address.state}</p>
        </div>
    `;
    document.getElementById('logout-link').addEventListener('click', () => {
        localStorage.removeItem('loggedInUser');
        window.location.href = 'index.html';
    });
});
