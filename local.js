
/**
 * 
 * @param {string} key - key to be used in local storage
 * @param {string | number | boolean | object | any [] } value - value to be saved in local storage
 * @returns  {string} - a message that the data was saved with the key
 */


function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    return "data was saved with key " + key;
}
function readFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))

}
function deleteFromLocalStorage(key) {
    localStorage.removeItem(key);
    return "The element with key " + key + " was deleted";

}
saveToLocalStorage();

/* 
let success = saveToLocalStorage("favorites", [1, 5, 8])
console.log(success);

let Myfavorites = readFromLocalStorage("favorites");
console.log(Myfavorites);

let deletedsuccess = deleteFromLocalStorage("favorites");
console.log(deletedsuccess); */
