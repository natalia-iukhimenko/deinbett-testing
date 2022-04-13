export function getRandomValueFromArray(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}