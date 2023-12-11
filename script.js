document.addEventListener('DOMContentLoaded', () => {
  // Views constants: NAV, HOME, MENU, CONTACTS US, FOOTER
  const homeView = document.getElementById('HOME');
  const menuView = document.getElementById('MENU');
  const menu = document.querySelector('nav');

  // Buttons
  const orderButton = document.querySelector('.Order');
  const closeMenu = document.querySelector('.fa-x');
  const openMenu = document.querySelector('.fa-bars');

  //body
  const bodyView = document.querySelector('body');

  //scroll infinite
  const sliderContainer = document.querySelector('.cards_food');
  const slider = document.querySelector('.slider');
  const sliderElements = document.querySelectorAll('.food_card_ad');

  const rootStyles = document.documentElement.style;

  let slideCounter = 0;
  let isInTransition = false;
  let sliderInterval;

  const DIRECTION = {
    RIGHT: 'RIGHT',
    LEFT: 'LEFT',
  };

  const getTransformValue = () =>
    Number(rootStyles.getPropertyValue('--slide-transform').replace('px', ''));

  const reorderSlide = () => {
    const transformValue = getTransformValue();
    rootStyles.setProperty('--transition', 'none');
    if (slideCounter === sliderElements.length - 1) {
      slider.appendChild(slider.firstElementChild);
      rootStyles.setProperty(
        '--slide-transform',
        `${transformValue + sliderElements[slideCounter].scrollWidth}px`
      );
      slideCounter--;
    } else if (slideCounter === 0) {
      slider.prepend(slider.lastElementChild);
      rootStyles.setProperty(
        '--slide-transform',
        `${transformValue - sliderElements[slideCounter].scrollWidth}px`
      );
      slideCounter++;
    }

    isInTransition = false;
  };

  const moveSlide = (direction) => {
    if (isInTransition) return;
    const transformValue = getTransformValue();
    rootStyles.setProperty('--transition', 'transform 1s');
    isInTransition = true;
    if (direction === DIRECTION.LEFT) {
      rootStyles.setProperty(
        '--slide-transform',
        `${transformValue + sliderElements[slideCounter].scrollWidth}px`
      );
      slideCounter--;
    } else if (direction === DIRECTION.RIGHT) {
      rootStyles.setProperty(
        '--slide-transform',
        `${transformValue - sliderElements[slideCounter].scrollWidth}px`
      );
      slideCounter++;
    }
  };

  slider.addEventListener('transitionend', () => {
    reorderSlide();
    startSliderInterval();
  });

  function startSliderInterval() {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(() => {
      moveSlide(DIRECTION.RIGHT);
    }, 5000);
  }

  startSliderInterval();

  const linksMenu = menu.querySelectorAll('a');
  linksMenu.forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });

  closeMenu.addEventListener('click', () => {
    menu.classList.add('hidden');
  });

  openMenu.addEventListener('click', () => {
    menu.classList.remove('hidden');
  });

  orderButton.addEventListener('click', () => {
    homeView.classList.add('hidden');
    menuView.classList.remove('hidden');
    // bodyView.style.backgroundColor = 'white';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const elementos = document.querySelectorAll('.card_product_filter');

  function actualizarOpacidad() {
    const container = document.querySelector('.catalog_products');
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    elementos.forEach((elemento) => {
      const rect = elemento.getBoundingClientRect();
      const elementCenter = rect.left + rect.width / 2;

      // Verificar si el centro del elemento está dentro del centro del contenedor
      if (
        elementCenter >= containerCenter - rect.width / 2 &&
        elementCenter <= containerCenter + rect.width / 2
      ) {
        elemento.style.opacity = '1';
        elemento.style.zIndex = '999';
        elemento.style.transform = 'scale(1)';
      } else {
        elemento.style.opacity = '0.4';
        elemento.style.zIndex = '0';
        elemento.style.transform = 'scale(1)';
      }
    });
  }

  document
    .querySelector('.catalog_products')
    .addEventListener('scroll', actualizarOpacidad);
  actualizarOpacidad();
});