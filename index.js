const sectionElement = document.getElementById("icons-list");

for (let index = 1; index <= 60; index++) {
	const figureInnerHTML = `
        <img src="https://www.accuweather.com/images/weathericons/${index}.svg" alt="${index}" />
        <h2>${index}</h2>
    `;

	const figureElement = document.createElement("figure");
	figureElement.classList.add("icon-representation");
	figureElement.innerHTML = figureInnerHTML;
	sectionElement.appendChild(figureElement);
}
