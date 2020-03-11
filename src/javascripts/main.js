import '../styles/main.scss';
import 'bootstrap';

console.error('hi');

const testChecked = () => {
  $('checkbox').addClass('active');
  console.error('click');
};

const clickEvents = () => {
  $('body').on('click', '#dropdown-item', testChecked);
};

clickEvents();
