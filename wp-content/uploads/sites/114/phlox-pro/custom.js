/*
===============================================================
 #CUSTOM JavaScript
- Please do not edit this file. This file is generated from admin area.
- Every changes here will be overwritten by theme
===============================================================*/
    /* theme_options_custom 
=========================*/
var qty = document.querySelectorAll('.woocommerce-page .quantity');
qty.forEach( function( element) {
    element.classList.add('aux-shop-quantity');
    element.classList.remove('quantity');
})

