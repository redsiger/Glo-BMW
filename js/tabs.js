const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]')
const tabsFieldElems = document.querySelectorAll('[data-tabs-field]')

for (item of tabsHandlerElems) {
    item.addEventListener('click', function() {
        if (!this.classList.contains('design-list__item_active')) {
            tabsHandlerElems.forEach((hnd) => {
                hnd.classList.remove('design-list__item_active')
            })
            this.classList.add('design-list__item_active');
            
            tabsFieldElems.forEach((fld) => {
                if (this.dataset.tabsHandler === fld.dataset.tabsField) {
                    fld.classList.remove('hidden');
                } else {
                    fld.classList.add('hidden');
                }
            })
        }
    })
}