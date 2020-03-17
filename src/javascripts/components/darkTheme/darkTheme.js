const darkMode = () => {
  document.body.classList.toggle('dark-mode');
  $('div.card').toggleClass('bg-dark');
  $('nav.navbar').toggleClass('bg-dark');
};
export default { darkMode };
