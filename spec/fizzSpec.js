describe("My fizzBuzz function", function() {
    beforeEach(function() {
        fizz = new fizzBuzz();
    });

    describe("Checks number", function() {
        it("should be divisible by 3 or 5", function() {
              expect(fizzBuzz).toBeDefined();
        });

        it("should return FizzBuzz when fizzBuzz(number%3 && number%5)", function() {
            var result = fizzBuzz(number%3 && number%5)
            expect(result).toBe("Fizz Buzz");
        });

        it("should return Fizz when fizzBuzz(number%3)", function() {
            var result = fizzBuzz(number%3)
            expect(result).toBe("Fizz");
        });

        it("should return FizzBuzz when fizzBuzz(number%5)", function() {
            var result = fizzBuzz (number%5)
            expect(result).toBe("Buzz");
        });

        it("should return number if fizzBuzz not divisible by 3 or 5", function() {
            var result = number;
            expect(result).toBe(number);
        });     
}

