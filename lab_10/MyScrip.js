function showDetails(breed, age, popularity) {
    const url = `info.html?breed=${encodeURIComponent(breed)}&age=${encodeURIComponent(age)}&popularity=${encodeURIComponent(popularity)}`;
    window.location.href = url;
  }
