function checkPrimeNumbers(arr: number[]): boolean {
    for (let num of arr) {
      if (!isPrime(num)) {
        return false;
      }
    }
    return true;
  }
  
  function isPrime(num: number): boolean {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Sử dụng hàm để kiểm tra mảng
  let numbers: number[] = [2, 3, 5, 7, 11];
  let result: boolean = checkPrimeNumbers(numbers);
  console.log(result); // true
  
  numbers = [1, 4, 6, 8, 9];
  result = checkPrimeNumbers(numbers);
  console.log(result); // false