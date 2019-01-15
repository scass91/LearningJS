describe("fizzBuzz", function() {

    it("2 for 2", function() {
      expect(fizzBuzz(2)).toEqual(2)
    })

    it("1 for 1", function() {
      expect(fizzBuzz(1)).toEqual(1)
    })

    it("13 for 13", function() {
      expect(fizzBuzz(13)).toEqual(13)
    })

    it("Return fizz for numbers divisible by 3", function() {
      expect(fizzBuzz(3)).toEqual("fizz")
    })

    it("Return buzz for numbers divisible by 5", function() {
      expect(fizzBuzz(5)).toEqual("buzz")
  })

})
