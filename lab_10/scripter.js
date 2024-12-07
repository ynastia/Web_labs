const params = new URLSearchParams(window.location.search);
const breed = params.get('breed');
const age = params.get('age');
const popularity = params.get('popularity');
document.getElementById('dogBreed').textContent = breed;
document.getElementById('dogAge').textContent = age;
document.getElementById('dogPopularity').textContent = popularity;
const extensions = ['jpg', 'jpeg', 'jfif'];
let foundImage = false;

function sanitizeFileName(name) {
  return name.toLowerCase();
}

function checkImage() {
  const sanitizedBreed = sanitizeFileName(breed);
  for (let ext of extensions) {
    const imageSrc = `images_dogs/${sanitizedBreed}.${ext}`;
    const img = new Image();
    img.src = imageSrc;

    img.onload = function() {
      document.getElementById('dogImage').src = imageSrc;
      document.getElementById('dogImage').alt = breed;
      foundImage = true;
    };

    img.onerror = function() {
      if (!foundImage) {
        console.log(`Зображення з розширенням .${ext} не знайдено`);
      }
    };

    if (foundImage) break;
  }
}

checkImage();

function goBack() {
  window.location.href = "index.html";
}
