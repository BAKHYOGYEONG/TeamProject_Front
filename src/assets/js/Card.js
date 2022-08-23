export class Card {
    constructor(data, cardSelector, openImage) {
        this._link = data.link
        this._name = data.name
        this._cardSelector = cardSelector
        this._card = this._getTemplate()

        this._cardLink = this._card.querySelector('.element__image')
        this._trashBtn = this._card.querySelector('.element__trash')

        this._openImage = openImage
    }
    _getTemplate() {
        const card = document
            //    todo: 아래 .content 주석 처리 ( template 안씀 )
         .querySelector(this._cardSelector)
            //    .content
        .querySelector('.element')
        .cloneNode(true)

        return card
    }

    _cardDelete() {
        this._trashBtn.closest('.element').remove()
    }
    _setEventListeners() {
        this._trashBtn.addEventListener('click', () => {
            this._cardDelete()
        })

        this._cardLink.addEventListener('click', () => {
            this._openImage(this._name, this._link)
        })

    }
    generateCard() {
        
        this._cardLink.src = this._link
        this._setEventListeners()
        return this._card
    }
     
}