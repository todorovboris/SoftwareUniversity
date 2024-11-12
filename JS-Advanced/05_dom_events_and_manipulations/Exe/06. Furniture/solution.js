function solve() {
    const buttons = document.querySelectorAll('button');
    const generateBtn = buttons[0];
    const buyBtn = buttons[1];

    const inputElm = document.querySelectorAll('textarea')[0];
    const outputElm = document.querySelectorAll('textarea')[1];

    generateBtn.addEventListener('click', (e) => {
        const data = JSON.parse(inputElm.value);

        const productListElm = document.querySelector('table.table tbody');

        data.forEach((item) => {
            const product = document.createElement('tr');

            const productImageCell = document.createElement('td');
            const productImage = document.createElement('img');
            productImage.setAttribute('src', item.img);
            productImageCell.appendChild(productImage);

            const productNameCell = document.createElement('td');
            productNameCell.textContent = item.name;

            const productPriceCell = document.createElement('td');
            productPriceCell.textContent = item.price;

            const productDecFac = document.createElement('td');
            productDecFac.textContent = item.decFactor;

            const productMarkCell = document.createElement('td');
            const productMarkCheckbox = document.createElement('input');
            productMarkCheckbox.setAttribute('type', 'checkbox');
            productMarkCell.appendChild(productMarkCheckbox);

            product.append(productImageCell, productNameCell, productPriceCell, productDecFac, productMarkCell);

            productListElm.appendChild(product);
        });
    });

    buyBtn.addEventListener('click', (e) => {
        const data = [];

        const dataArr = document.querySelectorAll('.table tbody tr').forEach((item) => {
            if (item.querySelector('input:checked')) {
                const cells = item.querySelectorAll('td');
                data.push({
                    name: cells[1]?.textContent,
                    price: cells[2]?.textContent,
                    decFactor: cells[3]?.textContent,
                });
            }
        });

        const totalPrice = data.reduce((sum, item) => {
            return sum + Number(item.price);
        }, 0);

        const totalDecFactor = data.reduce((sum, item) => {
            return sum + Number(item.decFactor);
        }, 0);

        const avgDecFactor = totalDecFactor / data.length;

        let output = `Bought furniture: ${data.map((item) => item.name).join(', ')}\n`;
        output += `Total price: ${totalPrice.toFixed(2)}\n`;
        output += `Average decoration factor: ${avgDecFactor}`;

        outputElm.value = output;
    });
}
