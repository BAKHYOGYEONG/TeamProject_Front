import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {items, validate} from './constans.js'


function index() {

    //попап редактирования
    // 팝업수정
    const popupEdit = document.querySelector(".popup-edit");
    // попап добавления
    // 팝업 추가
    const popupAdd = document.querySelector(".popup-add");
    const formAdd = document.querySelector('.form-add')
    const formEdit = document.querySelector('.form-edit')

    const popupImage = document.querySelector(".popup-image");

    //кнопка ред
    // 편집버튼
    const buttonPopupAdd = document.querySelector(".profile__add-button");
    //추가버튼
    // const buttonPopupEdit = document.querySelector(".profile__edit-button");

    //имя
    // 이름
    const profileName = document.querySelector(".profile__name");

    //имя в форме
    // 형식의 이름
    const inputName = document.querySelector(".popup__input_value_name");
    //картинка карточки в форме
    // 모양의 카드 그림
    const inputLink = document.querySelector(".popup__input_value_link");

    //карточки
    // 카드
    const cardList = document.querySelector(".elements");

    const popupOpenImage = document.querySelector(".popup-image__image");
    const popupOpenTitle = document.querySelector(".popup-image__title");

    const editFormValid = new FormValidator(validate, formEdit)
    const addFormValid = new FormValidator(validate, formAdd)

//открытие попапа
// 팝업열기

    function openPopup(popup) {
        popup.classList.add("popup_is-opened");
        document.addEventListener("keydown", popupCloseEscButton);
    }

//открытие попапа добавления
// 추가 팝업 열기

    buttonPopupAdd.addEventListener("click", function () {
        openPopup(popupAdd);
    });

//открытие попапа редактирования
// 편집 팝업 열기
//     buttonPopupEdit.addEventListener("click", function () {
//         inputName.value = profileName.textContent;
//         openPopup(popupEdit);
//     });

// закрытие попапа
// 팝업 닫기
    function closePopup(popup) {
        popup.classList.remove("popup_is-opened");
        document.removeEventListener("keydown", popupCloseEscButton);
    }

//закрытие нажатием на esc
// esc를 눌러 닫기
    function popupCloseEscButton(evt) {
        if (evt.key === "Escape") {
            const popupOpened = document.querySelector(".popup_is-opened");
            closePopup(popupOpened);
        }
    }

//закрытие кликом
// 닫기를 클릭
    function popupClickClose(evt) {
        if (evt.target === evt.currentTarget) {
            closePopup(evt.target);
        }
    }

    document.querySelectorAll(".popup__close-button").forEach((button) => {
        const popup = button.closest(".popup");
        button.addEventListener("click", () => closePopup(popup));
    });

//закрытие нажатием за пределы попапа
// 팝업 외부를 클릭하여 닫기
    document.querySelectorAll(".popup").forEach((popup) => {
        popup.addEventListener("mousedown", popupClickClose);
    });

//сохранение информации
    // 정보 저장
    function handleEditCardSubmit(evt) {
        evt.preventDefault();
        profileName.textContent = inputName.value;
        closePopup(popupEdit);
        editFormValid.toggleButtonState()
    }

    popupAdd.addEventListener("submit", handleEditCardSubmit);
    popupEdit.addEventListener("submit", handleEditCardSubmit);


    function openImage(name, link) {
        openPopup(popupImage)
        popupOpenImage.src = link
        popupOpenImage.alt = name
        popupOpenTitle.textContent = name
    }

    function handleAddCardSubmit(evt) {
        evt.preventDefault()
        const card = {}
        card.link = inputLink.value
        createCard(card)
        evt.target.reset()
        closePopup(popupAdd)
        addFormValid.toggleButtonState()

    }

    popupAdd.addEventListener("submit", handleAddCardSubmit);


    function cardNew(data) {
        const cards = new Card(data, '.card', openImage)
        return cards.generateCard()
    }

    function createCard(card) {
        cardList.prepend(cardNew(card))
    }

    items.forEach(createCard)

    editFormValid.enableValidation()
    addFormValid.enableValidation()

    const sumCard = document.querySelector('.elements__sum_title')
    const cardAll = document.querySelectorAll('.element')
    const elementNumber = cardAll.length

//  todo: div 초기 이미지 삭제 : <img src="#" ~>
//  todo: elementNumber : 총 card 건수 - 1 ( 배열은 0부터 시작 )
    cardAll[elementNumber - 1].remove();

    // sumCard.innerHTML = elementNumber + " 번의 플로깅에 동참하셨습니다."
}

export default index;