const modal = document.querySelector('#modal')
const closeButton = document.querySelector('#closeModal')

modal.showModal()

closeButton.addEventListener('click', () => {
    modal.close()
})
