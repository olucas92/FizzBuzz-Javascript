describe("FizzBuzz", function() {

  var fizzbuzz;

  describe("knows when a number", function() {

    it("is divisible by 3", function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it("is not divisible by 3", function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });

    it("is divisible by 5", function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

    it("is not divisible by 5", function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByFive(7)).toBe(false)
    });

  });

});