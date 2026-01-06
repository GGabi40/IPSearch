document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#ip-form");

    form.addEventListener("submit", formSended);

});

const formSended = (e) => {
    e.preventDefault();
    const inputValue = document.querySelector("#ip-input").value.trim();

    if(!inputValue) return;

    cleanIP(inputValue);
}

const cleanIP = (ip) => {
    // tratar IP
    const cleanIp = ip;
    
    searchIp(cleanIp);
}

const searchIp = async (ip) => {
    const url = "ip.guide/";

    // showResults(answer);
}

const showResults = (answer) => {
    const result = document.querySelector(".result");

    return result.innerHTML = answer;
}