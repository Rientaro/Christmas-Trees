const buttonsOrder = document.querySelectorAll('.product__button_order');
const overlayOrder = document.querySelector('.overlay_order');
const order = overlayOrder.querySelector('.modal__order');
const buttonCons = document.querySelectorAll('.consultation__button_order')  
const overlayCons = document.querySelector('.overlay_consultation')

buttonsOrder.forEach(buttonOrder => {
    buttonOrder.addEventListener('click', () => {
        overlayOrder.classList.add('overlay_active');
        order.value = buttonOrder.dataset.order;
    });
});

buttonCons.forEach(buttonCons => {
    buttonCons.addEventListener('click', () => {
        overlayCons.classList.add('overlay_active');
    });
});


overlayOrder.addEventListener('click', event => {
    const target = event.target;

    if (target === overlayOrder || target.closest('.modal__close')) {
    overlayOrder.classList.remove('overlay_active');

    }
});

overlayCons.addEventListener('click', event => {
    const target = event.target;

    if (target === overlayCons || target.closest('.modal__close')) {
    overlayCons.classList.remove('overlay_active');

    }
});
