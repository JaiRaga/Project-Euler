function fiboEvenSum(n) {
    // You can do it!
    let b = 2, sum = 3, arr = [2]
    for (let i = 0; i < n-1; i++) {
      let temp = sum
      arr.push(sum)
      sum += b
      b = temp
    }
    sum = 0
    for (let i of arr) {
      if (i % 2 === 0) {
        sum += i
      }
    }
    console.log(sum)
    return sum;
  }
  
  fiboEvenSum(10); // 188.
  fiboEvenSum(23); // 60696.
  fiboEvenSum(43); // 1485607536.