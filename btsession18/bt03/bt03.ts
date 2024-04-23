function cacheResult(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const cache: { [key: string]: any } = {};
  
    descriptor.value = function (...args: any[]) {
      const cacheKey = JSON.stringify(args);
  
      if (cacheKey in cache) {
        console.log("Retrieving cached result...");
        return cache[cacheKey];
      }
  
      const result = originalMethod.apply(this, args);
      cache[cacheKey] = result;
      console.log("Calculating result...");
  
      return result;
    };
  
    return descriptor;
  }
  
  class Calculator {
    @cacheResult
    static add(a: number, b: number): number {
      return a + b;
    }
  }
  
  console.log(Calculator.add(2, 3)); // Output: "Calculating result..." and then 5
  console.log(Calculator.add(2, 3)); // Output: "Retrieving cached result..." and then 5