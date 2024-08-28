export const getInput = () => {
    const inputValue = document.querySelector(".summoner-input").value;
    return inputValue;
}


const val = getInput();
console.log(val);

