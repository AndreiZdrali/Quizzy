export function shuffleArray(array) {
    let cpy = [...array];
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cpy[i];
        cpy[i] = cpy[j];
        cpy[j] = temp;
    }
    return cpy;
}