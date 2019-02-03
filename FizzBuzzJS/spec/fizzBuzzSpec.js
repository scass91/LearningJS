describe("fizzBuzz", function() {
  describe("Specific Numbers", function() {
    it("2 for 2", function() {
      expect(fizzBuzz(2)).toEqual(2)
    })

    it("1 for 1", function() {
      expect(fizzBuzz(1)).toEqual(1)
    })

    it("13 for 13", function() {
      expect(fizzBuzz(13)).toEqual(13)
    })

  })

  describe("Multiples of 3", function() {
    it("Return fizz for 3", function() {
      expect(fizzBuzz(3)).toEqual("fizz")
    })

    it("Return fizz for 6", function() {
      expect(fizzBuzz(6)).toEqual("fizz")
    })

  })

  describe("Multiples of 5", function() {
    it("Return buzz for 5", function() {
      expect(fizzBuzz(5)).toEqual("buzz")
    })

    it("Return buzz for 10", function() {
      expect(fizzBuzz(10)).toEqual("buzz")
    })

  })

  describe("Multiples of 15", function() {
    it("Return fizzbuzz for 15", function() {
      expect(fizzBuzz(15)).toEqual("fizzbuzz")
    })

    it("Return fizzbuzz for 30", function() {
      expect(fizzBuzz(30)).toEqual("fizzbuzz")
    })
  })
})
