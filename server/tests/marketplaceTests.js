```javascript
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index.js');
const should = chai.should();

chai.use(chaiHttp);

describe('Marketplace', () => {
    describe('/GET marketplace', () => {
        it('it should GET all the AI personas', (done) => {
            chai.request(server)
                .get('/marketplace')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });

    describe('/POST marketplace', () => {
        it('it should POST a new AI persona', (done) => {
            let aiPersona = {
                name: "AI Persona",
                description: "This is a test AI persona",
                price: 100
            }
            chai.request(server)
                .post('/marketplace')
                .send(aiPersona)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('AI Persona successfully added!');
                    res.body.aiPersona.should.have.property('name');
                    res.body.aiPersona.should.have.property('description');
                    res.body.aiPersona.should.have.property('price');
                    done();
                });
        });
    });

    describe('/GET/:id marketplace', () => {
        it('it should GET an AI persona by the given id', (done) => {
            let aiPersona = new MarketplaceModel({name: "AI Persona", description: "This is a test AI persona", price: 100});
            aiPersona.save((err, aiPersona) => {
                chai.request(server)
                .get('/marketplace/' + aiPersona.id)
                .send(aiPersona)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('name');
                    res.body.should.have.property('description');
                    res.body.should.have.property('price');
                    res.body.should.have.property('_id').eql(aiPersona.id);
                    done();
                });
            });
        });
    });
});
```