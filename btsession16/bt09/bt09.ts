function flattenArray<T>(arr: T[]): T[] {
    return arr.reduce<T[]>((result, element) => {
      if (Array.isArray(element)) {
        return result.concat(flattenArray(element));
      }
      return result.concat(element);
    }, []);
  }
  // Sử dụng hàm flattenArray
  const nestedArray = [1, [2, [3, 4], 5], 6];
  console.log(flattenArray(nestedArray));