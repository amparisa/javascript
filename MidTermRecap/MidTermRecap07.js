function sumTwoSmallestNums(numbers) {
    let totalSnum = 0; 
    let small = 1;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1;j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                let num = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = num;
            }
        }
    }
    for (let n = 0; n < numbers.length; n++) {
        if (numbers[n] >= 0 && small < 3) {
            totalSnum  += numbers[n];
            small++;
        }
  }
  return totalSnum ;
}
console.log(sumTwoSmallestNums([19, 5, 42, 2, 77]));
console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]));
console.log(sumTwoSmallestNums([2, 9, 6, -1]));
console.log(sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]));
console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]));