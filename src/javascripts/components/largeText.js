const bigText = (e) => {
  if (e.target.id === 'large-text') {
    $('body').toggleClass('enlarged');
    bigText.preventDafault();
  }
};

export default { bigText };
