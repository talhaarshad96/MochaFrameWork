

var assert = require('assert')

describe('Mathematical Operations - Test Suite', function(){

    this.timeout(5000)  //suite level timeout

    /*it.only('Add 2 num', function() //exclusive test
    {
        var a =10, b=5, c=a+b
        assert.equal(c,15)
    })*/

   /*it.skip('Add 2 num', function() //inclusive
    {
        var a =10, b=5, c=a+b
        assert.equal(c,15)
    })*/

    it('Add 2 num', function(done) //inclusive
    {
        this.timeout(500)
        setTimeout(done,3000)

        var a =10, b=5, c=a+b
        assert.equal(c,15)
    })

    it('sub 2 num', function()
    {
        var a =10, b=5 ,c=a-b
        assert.equal(c,5)
    })

    it('multiply 2 num', function()
    {
        var a =10, b=5, c=a*b
        assert.equal(c,50)
    })

    it('division 2 num', function()
    {
        var a =10, b=5, c=a/b
        assert.equal(c,2)
    })

    it('should be pending' //pending
       
    )
})
