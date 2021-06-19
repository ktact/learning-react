fetch(`https://api.github.com/users/ktact`)
  .then(response => response.json())
  .then(console.log)
  .catch(console.error);
