
import $ from 'jquery';

const darkTheme = () => {
  const root = $('body');
  root.toggleClass('theme-light');
  root.toggleClass('theme-dark');
  // $('#app-root').toggleClass('theme-dark');
};

const turnDark = () => {
  // $('#darkThemeCheck').on('change', darkMode);
  $('body').on('click', '#dark-mode', () => {
    darkTheme();
  });
};

export default { turnDark };
