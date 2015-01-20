describe("FizzBuzz", function() {

  var fizzbuzz;

  describe("knows when a number", function() {

    beforeEach(function(){
      fizzbuzz = new FizzBuzz;
    })

    it("is divisible by 3", function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it("is not divisible by 3", function(){
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });

    it("is divisible by 5", function(){
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

    it("is not divisible by 5", function(){
      expect(fizzbuzz.isDivisibleByFive(7)).toBe(false)
    });

    it("is divisible by 15", function(){
      expect(fizzbuzz.isDivisibleByFifteen(30)).toBe(true)
    });

    it("is not divisible by 15", function(){
      expect(fizzbuzz.isDivisibleByFifteen(37)).toBe(false)
    });

  });

  describe("rules of the game", function(){

    it("should return fizz for numbers divisible by 3", function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.playGame(3)).toBe("fizz");
    })

    it("should return buzz for numbers divisible by 5", function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.playGame(10)).toBe("buzz");
    })

    it("should return fizzbuzz for number divisible by 15", function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.playGame(30)).toBe('fizzbuzz');
    })


  })

});