function printPyramid(num) {
    for (let index = 0; index <= num; index++) {
        let row = "";

        for (let space = 1; space <= num - index; space++) {
            row += " ";
        }

        for (let star = 1; star <= 2 * index - 1; star++) {
            row += "*";
        }
    
        console.log(row);
    }
}

var num = 5;
printPyramid(num);