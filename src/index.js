import './styles/style.scss';
import $ from 'jquery';
import 'bootstrap';

const userStack = {
  language: 'JavaScript',
  framework: 'React',
};

const user = {
  name: 'Artem ',
  age: '26',
  ...userStack,
};

console.log(user);

$('.block').html('qweqweqwe');
