export default function easter(name, detail, counterId) {
    if (name == "kuru" && detail == "kuru") {
        const outputElement = document.getElementById("ulOutput");
        outputElement.innerHTML += `
        <li class="border border-primary mt-3 p-3" id="output-${counterId}">
        <img src="https://kurukuru.morian.icu/e.gif" alt="">
        </li>
        `;
    }
}
