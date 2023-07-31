const { assert } = require('chai')

const MemoryToken = artifacts.require('./MemoryToken.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Memory Token', (accounts) => {
   let token 
  // code goes here...
   describe('deployment' ,async() =>{
      it ('deploys suceesfully', async() =>{
       token  = await  MemoryToken.deployed()
       const address = token.address
       assert.notEqual(address , 0*0)
       assert.notEqual(address ,'')
       assert.notEqual(address,null)
       assert.notEqual(address ,undefined)        
        
      })
   })


})
