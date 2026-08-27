const button = document.getElementById("createWallet");
const wallet = document.getElementById("wallet");

button.onclick = function () {

    const words = [
        "apple",
        "river",
        "moon",
        "crypto",
        "future",
        "secure"
    ];

    wallet.innerHTML = `
        <h2>Your Seed Phrase</h2>
        <p>${words.join(" ")}</p>
    `;

};