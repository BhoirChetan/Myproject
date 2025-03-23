document.addEventListener('DOMContentLoaded', () => {
    // Display customer name
    let customerName = localStorage.getItem('customerName') || "User";
    document.getElementById('customer-name').textContent = customerName;

    // Logout functionality
    document.getElementById('logout').addEventListener('click', () => {
        localStorage.removeItem('customerName');
        window.location.href = 'login.html';
    });

    // Profile Update
    if (document.getElementById('edit-profile')) {
        let nameInput = document.getElementById('name');
        let emailInput = document.getElementById('email');
        let editBtn = document.getElementById('edit-profile');
        let saveBtn = document.getElementById('save-profile');

        nameInput.value = localStorage.getItem('customerName') || "";
        emailInput.value = localStorage.getItem('customerEmail') || "";

        editBtn.addEventListener('click', () => {
            nameInput.disabled = false;
            emailInput.disabled = false;
            saveBtn.style.display = 'inline';
            editBtn.style.display = 'none';
        });

        saveBtn.addEventListener('click', () => {
            localStorage.setItem('customerName', nameInput.value);
            localStorage.setItem('customerEmail', emailInput.value);
            alert("Profile updated successfully!");
            location.reload();
        });
    }
});
