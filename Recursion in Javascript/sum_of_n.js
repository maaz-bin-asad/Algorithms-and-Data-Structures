var num = prompt("Enter the number")
num = parseInt(num)
document.write(recursion(num));

function recursion(num) {
    if (num == 1) {
        return 1;
    } else {
        return num + recursion(num - 1)
    }
}