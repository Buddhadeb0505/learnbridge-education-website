const menu = document.querySelector('#menu');
const nav = document.querySelector('#nav');
menu.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
document.querySelectorAll('[data-course]').forEach(a => a.addEventListener('click', () => {
  document.querySelector('#interest').value = a.dataset.course;
}));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lead-form').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const course = document.querySelector('#interest').value;
  alert(`Thanks, ${name}! This is a demo enquiry.\nCourse: ${course}\nEmail: ${email}\n\nConnect this form to an email service, CRM, or backend before publishing.`);
  e.target.reset();
});