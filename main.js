const display = document.querySelector('#theme');

const defaultTheme = 'light';

let theme = localStorage.getItem('@sample-simple-theme-toggler') || defaultTheme;

function toggleTheme() {
  if (theme === 'light') {
    theme = 'dark';
  } else {
    theme = 'light';
  }

  localStorage.setItem('@sample-simple-theme-toggler', theme);

  document.body.setAttribute('data-theme', theme);
  display.innerText = theme;
}

document.body.setAttribute('data-theme', theme);
display.innerText = theme;
