describe("Mocha Hooks", function(){

    before('execute before all tests', function(){
        console.log('running before all tests')
    })

    beforeEach('execute before Each tests', function(done){
        console.log('running before Each tests')
        this.timeout(500)
        setTimeout(done,3000)
    })

    after('execute after all tests', function(){
        console.log('running after all tests')
    })

    afterEach('execute after each tests', function(){
        console.log('running after each tests')
    })

    it('Mocha Hook tests', function()
    {
        console.log('Mocha Test')
    })
})