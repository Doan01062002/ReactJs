function logFunction(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
  
    descriptor.value = function (...args: any[]) {
      console.log(`Function Name: ${propertyKey}`);
      console.log(`Parameters: ${JSON.stringify(args)}`);
  
      const result = originalMethod.apply(this, args);
  
      console.log(`Result: ${result}`);
      return result;
    };
  
    return descriptor;
  }
  
  class MyClass {
    @logFunction
    myMethod(param1: string, param2: number): string {
      return `Hello, ${param1} Your number is ${param2}.`;
    }
  }
  
  const instance = new MyClass();
  instance.myMethod("John", 42);