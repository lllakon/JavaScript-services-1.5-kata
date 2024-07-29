let brandCardsContainer = document.querySelector(".brandCards")
let showMoreBtn = document.querySelector(".showMore")

showMoreBtn.addEventListener("click", () => {
	if (brandCardsContainer.style.overflow === "visible") {
		brandCardsContainer.style.height = "155px"
		brandCardsContainer.style.overflow = "hidden"
	} else {
		brandCardsContainer.style.height = "auto"
		brandCardsContainer.style.overflow = "visible"
	}
})
