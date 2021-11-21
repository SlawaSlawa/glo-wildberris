const getGoods = () => {
    const URL = 'https://glo-wildberris-default-rtdb.firebaseio.com/db.json'
    const links = document.querySelectorAll('.navigation-link')
    // const moreBtn = document.querySelector('.more')

    const renderGoods = (goods) => {
        const goodsContainer = document.querySelector('.long-goods-list')
        goodsContainer.innerHTML = ''

        goods.forEach(good => {
            const { id, label, img, name, price, description } = good
            const goodBlock = document.createElement('div')
            goodBlock.classList.add('col-lg-3', 'col-sm-6')

            goodBlock.innerHTML = `
            <div class="goods-card">
                <span class="label ${label ? null : 'd-none'}">${label}</span>
                <img src="db/${img}" alt="image: ${name}" class="goods-image">
                <h3 class="goods-title">${name}</h3>
                <p class="goods-description">${description}</p>
                <button class="button goods-card-btn add-to-cart" data-id="${id}">
                    <span class="button-price">$${price}</span>
                </button>
            </div>
            `

            goodsContainer.append(goodBlock)
        })
    }

    const getData = (value, category) => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                const array = category ? data.filter(item => item[category] === value) : data
                localStorage.setItem('goods', JSON.stringify(array))

                if (window.location.pathname !== '/goods.html') {
                    window.location.href = '/goods.html'
                } else {
                    renderGoods(array)
                }
            })
    }

    links.forEach(link => {
        link.addEventListener('click', (evt) => {
            evt.preventDefault();
            const linkValue = link.textContent
            const category = link.dataset.field
            getData(linkValue, category)
        })
    })

    // moreBtn.addEventListener('click', (evt) => {
    //     evt.preventDefault()
    //     getData()
    // })

    if (localStorage.getItem('goods') && window.location.pathname === '/goods.html') {
        renderGoods(JSON.parse(localStorage.getItem('goods')))
    }
}

getGoods();