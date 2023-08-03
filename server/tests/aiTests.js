```javascript
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index.js');
const should = chai.should();

chai.use(chaiHttp);

describe('AI', () => {
    describe('/GET AI', () => {
        it('it should GET all the AI agents', (done) => {
            chai.request(server)
                .get('/ai')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });

    describe('/POST AI', () => {
        it('it should POST an AI agent', (done) => {
            let ai = {
                name: "AI Agent",
                description: "Test AI agent"
            }
            chai.request(server)
                .post('/ai')
                .send(ai)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('AI successfully added!');
                    res.body.ai.should.have.property('name');
                    res.body.ai.should.have.property('description');
                    done();
                });
        });
    });

    describe('/PUT/:id AI', () => {
        it('it should UPDATE an AI agent given the id', (done) => {
            let ai = new AIModel({name: "AI Agent", description: "Test AI agent"})
            ai.save((err, ai) => {
                chai.request(server)
                .put('/ai/' + ai.id)
                .send({name: "Updated AI Agent", description: "Updated test AI agent"})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('AI updated!');
                    res.body.ai.should.have.property('name').eql("Updated AI Agent");
                    done();
                });
            });
        });
    });

    describe('/DELETE/:id AI', () => {
        it('it should DELETE an AI agent given the id', (done) => {
            let ai = new AIModel({name: "AI Agent", description: "Test AI agent"})
            ai.save((err, ai) => {
                chai.request(server)
                .delete('/ai/' + ai.id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('AI successfully deleted!');
                    res.body.result.should.have.property('ok').eql(1);
                    res.body.result.should.have.property('n').eql(1);
                    done();
                });
            });
        });
    });
});
```