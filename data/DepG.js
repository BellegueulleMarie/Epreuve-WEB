const indicator = document.querySelector('.nav-id');
const items = document.querySelectorAll('.nav');

function handleIndicator(el) {
  // Boucler sur items -> retirer la classe "is-active"
  items.forEach(item => {
    item.classList.remove('selected');
    item.removeAttribute('style');
  })
  
  const elementColor = el.dataset.activeColor;
  const target = el.dataset.target;
  
  // Styliser l'indicateur
  indicator.style.backgroundColor = elementColor; 
  
  // Ajout la classe is-active
  el.classList.add('selected');
  el.style.color = elementColor;
}

items.forEach((item, index) => {
  item.addEventListener('click', e => {
    handleIndicator(e.target)
  });
  item.classList.contains('selected') && handleIndicator(item);
});

