function timingDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
  
    descriptor.value = function (...args: any[]) {
      console.log(`Function Name: ${propertyKey}`);
      console.log(`Parameters: ${JSON.stringify(args)}`);
  
      const startTime = performance.now();
      const result = originalMethod.apply(this, args);
      const endTime = performance.now();
      const executionTime = endTime - startTime;
  
      console.log(`Execution Time: ${executionTime}ms`);
      console.log(`Result: ${result}`);
      return result;
    };
  
    return descriptor;
  }
  
  class MyClass {
    @timingDecorator
    myMethod(param1: string, param2: number): string {
      // Do something
      return `Hello, ${param1}! Your number is ${param2}.`;
    }
  }
  
  const instance = new MyClass();
  instance.myMethod("John", 42);