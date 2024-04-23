function validateParameter(validationFn: (param: any) => boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      const originalMethod = descriptor.value;
  
      descriptor.value = function (...args: any[]) {
        for (const arg of args) {
          if (!validationFn(arg)) {
            throw new Error("Invalid parameter");
          }
        }
  
        return originalMethod.apply(this, args);
      };
  
      return descriptor;
    };
  }
  
  class Calculator {
    @validateParameter((param) => typeof param === "number")
    static add(a: number, b: number): number {
      return a + b;
    }
  }
  
  console.log(Calculator.add(2, 3)); // Output: 5
//   console.log(Calculator.add(2, "3")); // error: "Invalid parameter"