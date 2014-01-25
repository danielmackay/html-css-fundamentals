/// <reference path="../Scripts/jquery-1.8.2.js" />

$(function () {
    $('#clearToppings').click(function () {
        var toppingInputs = $('.topping');
        toppingInputs.attr('checked', false);
    });
});