async function getInfo() {
    const stopId = document.querySelector('#stopId').value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    const stopName = document.querySelector('#stopName');
    const busesUl = document.querySelector('#buses');

    busesUl.innerHTML = '';

    try {
        const res = await fetch(url);
        const data = await res.json();

        stopName.textContent = data.name;

        const buses = Object.entries(data.buses);
        for (const [busId, time] of buses) {
            const liElm = document.createElement('li');
            liElm.textContent = `Bus ${busId} arrives in ${time} minutes`;
            busesUl.appendChild(liElm);
        }
    } catch {
        stopName.textContent = 'Error';
    }

    // fetch(url)
    //     .then((res) => res.json())
    //     .then((result) => {
    //         stopName.textContent = result.name;
    //         const buses = Object.entries(result.buses);

    //         for (const [busId, time] of buses) {
    //             const liElm = document.createElement('li');
    //             liElm.textContent = `Bus ${busId} arrives in ${time} minutes`;

    //             busesUl.appendChild(liElm);
    //         }
    //     })
    //     .catch((err) => {
    //         stopName.textContent = 'Error';
    //     });
}
