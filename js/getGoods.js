const getGoods = () => {
    const URL = 'https://glo-wildberris-default-rtdb.firebaseio.com/db.json'
    const links = document.querySelectorAll('.navigation-link')

    const getData = () => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('goods', JSON.stringify(data))

            })
    }

    links.forEach(link => {
        link.addEventListener('click', (evt) => {
            evt.preventDefault();
            const target = evt.target
            getData()
        })
    })

    localStorage.setItem('goods', JSON.stringify({ name: 'all' }))
    const goods = JSON.parse(localStorage.getItem('goods'))
    console.log(localStorage)
    localStorage.removeItem('goods')
    console.log(localStorage)
}

getGoods();