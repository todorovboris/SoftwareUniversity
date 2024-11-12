function solve() {
    const departBtn = document.querySelector('#depart');
    const arriveBtn = document.querySelector('#arrive');

    let stop = {
        next: 'depot',
    };

    // async function depart() {
    //     departBtn.disabled = true;
    //     let url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
    //     const result = await fetch(url);

    //     if (result.status !== 200) {
    //         document.querySelector('.info').textContent = 'Error';
    //         departBtn.disabled = true;
    //         arriveBtn.disabled = true;
    //     }

    //     const data = await result.json();
    //     stop = data;

    //     document.querySelector('.info').textContent = `Next stop ${stop.name}`;
    //     arriveBtn.disabled = false;

    function depart() {
        departBtn.disabled = true;
        let url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;

        fetch(url)
            .then((res) => res.json())
            .then((result) => {
                stop = result;

                if (result.status !== 200) {
                    document.querySelector('.info').textContent = 'Error';
                    departBtn.disabled = true;
                    arriveBtn.disabled = true;
                }

                document.querySelector('.info').textContent = `Next stop ${stop.name}`;
                arriveBtn.disabled = false;
            });
    }

    function arrive() {
        document.querySelector('.info').textContent = `Arriving at ${stop.name}`;
        arriveBtn.disabled = true;
        departBtn.disabled = false;
    }

    return {
        depart,
        arrive,
    };
}

let result = solve();
