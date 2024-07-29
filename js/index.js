let brandCardsContainer = document.querySelector(".brandCards")
let showMoreBtn = document.querySelector(".showMore")
let showMoreText = document.querySelector(".showMore__text")
let showArrow = document.querySelector(".showMore__arrow")

showMoreBtn.addEventListener("click", () => {
	if (brandCardsContainer.style.overflow === "visible") {
		showMoreText.textContent = "Показать все"
		showArrow.classList.remove("showMore__arrow--visible")
		brandCardsContainer.style.height = "155px"
		brandCardsContainer.style.overflow = "hidden"
	} else {
		showMoreText.textContent = "Скрыть"
		showArrow.classList.add("showMore__arrow--visible")
		brandCardsContainer.style.height = "auto"
		brandCardsContainer.style.overflow = "visible"
	}
})
