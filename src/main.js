import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/home.css';
import '../styles/components/about.css';
import '../styles/components/contact.css';
import '../styles/components/work.css';
import '../styles/utils.css';

import lazyLoading from './lazy-loading';

lazyLoading();


const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.style.display = 'block';
  cursor.style.top = e.pageY - 10 + 'px';
  cursor.style.left = e.pageX - 10 + 'px';
});

document.addEventListener('mouseleave', e => {
  cursor.style.display = 'none';
});

document.addEventListener('click', e => {
  cursor.classList.add('expand');

  setTimeout(() => {
    cursor.classList.remove('expand');
  }, 500);
});
