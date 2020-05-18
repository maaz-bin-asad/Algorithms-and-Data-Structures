var string = prompt("Enter a string");
document.write(recursion(string));

function recursion(string) {
    if (string == '') {
        return 0;
    } else {
        return 1 + recursion(string.slice(1, string.length));
    }
}