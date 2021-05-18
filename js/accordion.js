const featureLinkElems = document.querySelectorAll('.feature__link')
console.log('featureLinkElems: ', featureLinkElems);
const featureSubElems = document.querySelectorAll('.feature-sub')
console.log('featureSubElems: ', featureSubElems);

/*for (let i = 0; i < featureLinkElems.length; i++) {
    featureLinkElems[i].addEventListener('click', () => {
        featureSubElems[i].classList.toggle('hidden');
        featureLinkElems[i].classList.toggle('feature__link_active');
    });
}*/

/*featureLinkElems.forEach((featureLinkElem, index) => {
    featureLinkElem.addEventListener('click', () => {
        featureSubElems[index].classList.toggle('hidden');
        featureSubElem.classList.toggle('feature__link_active');
    });
});*/

for (let i = 0; i < featureLinkElems.length; i++) {
    featureLinkElems[i].addEventListener('click', () => {
        if (featureLinkElems[i].classList.contains('feature__link_active')) {
            featureLinkElems[i].classList.remove('feature__link_active');
            featureSubElems[i].classList.add('hidden');
        } else {
            featureLinkElems.forEach((featureLinkElem) => {
                featureLinkElem.classList.remove('feature__link_active');
            });
            featureSubElems.forEach((featureSubElem) => {
                featureSubElem.classList.add('hidden');
            })

            featureLinkElems[i].classList.add('feature__link_active');
            featureSubElems[i].classList.remove('hidden');
        }
    });
}