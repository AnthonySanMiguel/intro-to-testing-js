// Unit tests for the helloWorld function
// describe('helloWorld', function() {
//     it('should be a defined function', function() {
//       expect(typeof helloWorld).toBe('function');
//     });
//     it('should return a string when called', function() {
//       expect(typeof helloWorld()).toBe("string");
//     });
//     it('should return the string "Hello, World!" when executed', function() {
//       expect(helloWorld()).toBe("Hello, World!");
//     });
//     it("should never return 'undefined' when called", function() {
//       expect(helloWorld()).not.toBe(undefined);
//     });
// });

// Unit tests for the sayHello function (CONTINUE TO REFINE FOR ALL GREEN)
// describe("sayHello", function() {
//     it('should be a defined function', function() {
//         expect(typeof sayHello).toBe("function");
//     });
//     it('should return a string when called', function() {
//         expect(typeof sayHello()).toBe("string");
//     });
//     it('if input is "Jane", return "Hello, Jane!"', function() {
//         expect(sayHello("Jane")).toBe("Hello, Jane!");
//     });
//     it('if input is "Alex", return "Hello, Alex!"', function() {
//         expect(sayHello("Alex")).toBe("Hello, Alex!");
//     });
//     it('if input is "Pat", return "Hello, Pat!"', function() {
//         expect(sayHello("Pat")).toBe("Hello, Pat!");
//     });
//     it('if Undefined, return "Hello, World!"', function() {
//         expect(sayHello()).toBe("Hello, World!");
//     });
//     it('if false, return "Hello, World!', function() {
//         expect(sayHello(false)).toBe("Hello, World!");
//     });
//     it('if Null, return "Hello, World!"', function() {
//         expect(sayHello(null)).toBe("Hello, World!");
//     });
//     it('if "", return "Hello, World!', function() {
//         expect(sayHello("")).toBe("Hello, World!");
//     });
//     it('if 5.11, return "Hello, World!', function() {
//         expect(sayHello(5.11)).toBe("Hello, World!");
//     });
//     it('if "5", return "Hello, World!', function() {
//         expect(sayHello("5")).toBe("Hello, World!");
//     });
//     it('if not a string, return "Hello, World!', function() {
//         expect(sayHello([])).toBe("Hello, World!");
//     });
// });

// // Unit tests for the isFive function
// describe("isFive", function() {
//     it('should be a defined function', function() {
//         expect(typeof isFive).toBe("function");
//     });
//     it('should return a boolean', function() {
//         expect(typeof isFive()).toBe("boolean");
//     });
//     it('if 5, return true', function() {
//         expect(isFive(5)).toBe(true);
//     });
//     it('if "5", return true', function() {
//         expect(isFive("5")).toBe(true);
//     });
// });

// Unit tests for the isEven function
describe("isEven", function() {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe("function");
    });
    it('should return a boolean', function () {
        expect(typeof isEven()).toBe("boolean");
    });
    it('if input is 2, return true when executed', function () {
        expect(isEven(2)).toBe(true);
    });
    it('if input is -4, return true when executed', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('if input is 3, return false when executed', function () {
        expect(isEven(3)).toBe(false);
    });
    it('if input is "banana", return false when executed', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('if input is "8", return true when executed', function () {
        expect(isEven("8")).toBe(true);
    });
    it('if input is Infinity, return true when executed', function () {
        expect(isEven(Infinity)).toBe(true);
    });
    it('if input is boolean, return false', function () {
        expect(isEven(true)).toBe(false);
    });
    it('if input is blank, return false when executed', function () {
        expect(isEven()).toBe(false);
    });
});
