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
function cacheResult(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    const cache = {};
    descriptor.value = function (...args) {
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
    static add(a, b) {
        return a + b;
    }
}
__decorate([
    cacheResult,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Calculator, "add", null);
console.log(Calculator.add(2, 3)); // Output: "Calculating result..." and then 5
console.log(Calculator.add(2, 3)); // Output: "Retrieving cached result..." and then 5
