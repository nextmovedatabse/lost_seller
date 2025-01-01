const loader = document.getElementById('loader');
const dataContainer = document.getElementById('data-container');

loader.style.display = 'flex';

fetch('https://script.google.com/macros/s/AKfycbwoPKXPMNIiTRWZ0XwU9lHjTs8iHRYoSRGj1rPzMqLzxA2EHlndZX7IzF4WX4n1tq0/exec', {
  method: 'POST'
})
  .then(response => response.json())
  .then(data => {
    loader.style.display = 'none';
    dataContainer.innerHTML = '';
    data.forEach((row, index) => {
      const title = row[0];
      const imageUrl = row[1];
      const html = `
        <div class="item" data-index="${index}">
          <h2>${title}</h2>
          <img src="${imageUrl}" />
        </div>
      `;
      dataContainer.insertAdjacentHTML('beforeend', html);
    });
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
      item.addEventListener('click', () => {
        const index = item.getAttribute('data-index');
        localStorage.setItem('currentIndex', index);
        window.location.href = 'details.html';
      });
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    loader.style.display = 'none';
  });
