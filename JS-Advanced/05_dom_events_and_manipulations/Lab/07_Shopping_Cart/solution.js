function solve() {
    let products = [];
    let totalPrice = 0;

    const shoppingList = document.querySelector('textarea');
    const addBtn = document.getElementsByClassName('add-product');
    const checkoutBtn = document.querySelector('.checkout');
    //  const checkoutBtn = document.getElementsByClassName('.checkout');

    for (const productInfo of addBtn) {
        productInfo.addEventListener('click', (e) => {
            const product = e.target.parentElement.parentElement;
            const productName = product.querySelector('.product-title').textContent;
            const productPrice = Number(product.querySelector('.product-line-price').textContent);

            shoppingList.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
            products.push(productName);
            totalPrice += productPrice;
        });
    }

    //  console.log(checkoutBtn);

    checkoutBtn.addEventListener('click', () => {
        const uniqueProducts = [...new Set(products)];

        shoppingList.value += `You bought ${uniqueProducts.join(', ')} for ${totalPrice.toFixed(2)}.`;
        for (const button of addBtn) {
            button.disabled = true;
        }
        checkoutBtn.disabled = true;
    });
}
