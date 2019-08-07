function multiplesOf3and5(number) {
    // Good luck!
    let sum = 0
    for (let i = 1; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i
      }
    }
    console.log(number, sum)
    return sum;
  }
  
  multiplesOf3and5(1000)  // ans:233168.
  multiplesOf3and5(19564) // ans: 89301183.