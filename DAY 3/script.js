function fetchUsers() {
  const container = document.getElementById("usersContainer");

  container.innerHTML = "";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      displayUsers(users);
    })
    .catch((error) => {
      container.innerHTML = `<p>Error: ${error.message}</p>`;
    });
}
fetchUsers();

function displayUsers(users) {
  const container = document.getElementById("usersContainer");

  if (users.length === 0) {
    container.innerHTML = "<p>No users found.</p>";
    return;
  }

  users.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.className = "user";
    userDiv.innerHTML = `
                    <h2>${user.name}</h2>
                    <p><strong>Username:</strong> ${user.username}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                    <p><strong>Company:</strong> ${user.company.name}</p>
                `;
    container.appendChild(userDiv);
  });
}
