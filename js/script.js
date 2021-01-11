document.addEventListener('DOMContentLoaded', () => {
    (() => {
        const image = document.querySelector('.js-toggle-image');
        const form  = document.querySelector('.js-client-form');


        if (!image || !form) {
            return;
        }

        image.addEventListener('click', () => {
            image.classList.toggle('analysis__button--active');
            form.classList.toggle('client-block--active');
        });
    })();
});

document.addEventListener('DOMContentLoaded', () => {
    (() => {
        const image = document.querySelector('.js-toggle');
        const form  = document.querySelector('.js-toggle__icon');
        const menu = document.querySelector('.js-navigation');

        if (!image || !form) {
            return;
        }

        image.addEventListener('click', () => {
            form.classList.toggle('toggle__icon_active');
            menu.classList.toggle('navigation_active');
        });
    })();
});
