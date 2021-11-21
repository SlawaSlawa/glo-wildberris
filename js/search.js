const search = () => {
    const input = document.querySelector('.search-block > input')
    const searchBtn = document.querySelector('.search-block > button')

    // input.addEventListener('input', (evt) => {
    //     const target = evt.target
    //     console.log('value: ', target.value);
    // })

    searchBtn.addEventListener('click', () => {
        console.log(input.value)
    })

}

search();