const tagButtons = document.querySelectorAll('.tag-btn');
const filterButton = document.getElementById('filter-btn');
const vacancies = document.querySelectorAll('.vacancy');

let selectedTags = [];

tagButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tag = button.dataset.tag;
        if (selectedTags.includes(tag)) {
            selectedTags = selectedTags.filter(t => t !== tag);
            button.classList.remove('selected');
        } else {
            selectedTags.push(tag);
            button.classList.add('selected');
        }
    });
});
filterButton.addEventListener('click', () => {
    vacancies.forEach(vacancy => {
        const vacancyTags = vacancy.dataset.tags.split(',');
        if (selectedTags.length > 0 && selectedTags.every(tag => vacancyTags.includes(tag))) {
            vacancy.classList.remove('hidden');
        } else {
            vacancy.classList.add('hidden');
        }
    });
});
s
  