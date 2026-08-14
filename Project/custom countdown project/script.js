const inputCOntainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('data-picker');
// Set data input min with Today's date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today)