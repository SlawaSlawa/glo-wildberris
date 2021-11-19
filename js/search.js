const search = () => {
    const input = document.querySelector('.search-block > input')
    const button = document.querySelector('.search-block > button')

    // input.addEventListener('input', (evt) => {
    //     const target = evt.target
    //     console.log('value: ', target.value);
    // })

    button.addEventListener('click', () => {
        console.log(input.value);
    })

}

search();