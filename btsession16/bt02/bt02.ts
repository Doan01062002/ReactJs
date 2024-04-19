function swapElements<T>(array: T[], index1: number, index2: number): T[] {
    if (index1 >= 0 && index1 < array.length && index2 >= 0 && index2 < array.length) {
      return array.map((element, index) => {
        if (index === index1) return array[index2];
        if (index === index2) return array[index1];
        return element;
      });
    }
  
    return array;
}

console.log(swapElements([1,2,3,4,5], 1, 3));
