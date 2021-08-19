const chai = require('chai');
var chaiHttp = require('chai-http');
const server = require('../app');
var expect = require('chai').expect;
const userCredentials = {
    
        username:"gurvindersinghs",
        password:"gurvinder123"
    
  }
chai.should();
chai.use(chaiHttp);

describe('Tasks API',()=>
{
    describe("GET / request ",()=>
    {
        it("It should Not Get index ",(done)=>
        {
            chai.request(server)
            .get("/")
            .end((err,response)=>
            {
                response.should.have.status(404);
                done();
                
            });
        })
    });    
    describe("GET /index request ",()=>
    {
        it("It should Get index ",(done)=>
        {
            chai.request(server)
            .get("/index")
            .end((err,response)=>
            {
                response.should.have.status(200);
                done();
                
            });
        })
    });
   
        
});