'use strict';

const cart = () => {
    const cartBtn = document.querySelector('.button-cart')
    const cart = document.getElementById('modal-cart')
    const modalClose = cart.querySelector('.modal-close')

    cartBtn.addEventListener('click', () => {
        cart.style.display = 'flex'
    })

    modalClose.addEventListener('click', () => {
        cart.style.display = ''
    })
}

cart()