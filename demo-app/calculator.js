function deriveFinalPrice(inputPrice) {
    outputEl.textContent = 'Final Price: ' + finalPrice + ' €';
}
formEl.addEventListener('submit', function (event) {
    event.preventDefault();
    deriveFinalPrice(+inputPrice);
});
