function getInfo() {
    const stopId = document.querySelector('#stopId').value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    const stopName = document.querySelector('#stopName');
    const busesUl = document.querySelector('#buses');

    busesUl.innerHTML = '';

    fetch(url)
        .then((res) => res.json())
        .then((result) => {
            stopName.textContent = result.name;
            const buses = Object.entries(result.buses);

            for (const [busId, time] of buses) {
                const liElm = document.createElement('li');
                liElm.textContent = `Bus ${busId} arrives in ${time} minutes`;

                busesUl.appendChild(liElm);
            }
        })
        .catch((err) => {
            stopName.textContent = 'Error';
        });
}
