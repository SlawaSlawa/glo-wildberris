const search = () => {
    const URL = 'https://glo-wildberris-default-rtdb.firebaseio.com/db.json'

    const input = document.querySelector('.search-block > input')
    const searchBtn = document.querySelector('.search-block > button')

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

    const getData = (value) => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                const array = data.filter(good => {
                    return good.name.toLowerCase().includes(value.toLowerCase())
                })

                localStorage.setItem('goods', JSON.stringify(array))

                if (window.location.pathname !== '/goods.html') {
                    window.location.href = '/goods.html'
                } else {
                    renderGoods(array)
                }
            })
    }

    // input.addEventListener('input', (evt) => {
    //     const target = evt.target
    //     console.log('value: ', target.value);
    // })

    try {
        searchBtn.addEventListener('click', () => {
            getData(input.value)
        })
    } catch (error) {
        console.error(error.message)
    }

}

search();