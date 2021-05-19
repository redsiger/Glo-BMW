const smothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])')

/*smothScrollElems.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()
        console.log('event: ', event);
    })
});*/

for (item of smothScrollElems) {
    item.addEventListener('click', function(event) {
        event.preventDefault()
        const id = this.getAttribute('href').substring(1)
        document.getElementById(id).scrollIntoView( {
            behavior: 'smooth'
        })
    })
}