"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function validateParameter(validationFn) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
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
    static add(a, b) {
        return a + b;
    }
}
__decorate([
    validateParameter((param) => typeof param === "number"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Calculator, "add", null);
console.log(Calculator.add(2, 3)); // Output: 5
//   console.log(Calculator.add(2, "3")); // error: "Invalid parameter"
