let chai = require("chai");
let chaiHttp = require("chai-http")
let server=require("../server")
let should = chai.should();
chai.use(chaiHttp);

describe("Tree api", function(){
    it("should return my favourite tree", done=>{
        chai.request(server)
            .get("/tree")
            .send({})
            .end((err,res)=>{
                res.should.have.status(200);
                res.body.should.deep.equal({ 'my favourite tree': 'sycamore 🌳' })
                console.log("Response Body:", res.body);                
                done();
            });
    });
})