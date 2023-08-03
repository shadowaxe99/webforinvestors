```javascript
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index.js');
const BlockchainModel = require('../models/Blockchain.js');

chai.should();
chai.use(chaiHttp);

describe('Blockchain', () => {
    describe('GET /blockchain', () => {
        it('It should GET all the blockchain transactions', (done) => {
            chai.request(server)
                .get('/blockchain')
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    done();
                });
        });
    });

    describe('POST /blockchain/mint', () => {
        it('It should POST a new blockchain transaction', (done) => {
            const transaction = new BlockchainModel({
                userId: '60d0fe4f5311236168a109ca',
                aiId: '60d0fe4f5311236168a109cb',
                transactionHash: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7'
            });
            chai.request(server)
                .post('/blockchain/mint')
                .send(transaction)
                .end((err, response) => {
                    response.should.have.status(201);
                    response.body.should.be.a('object');
                    response.body.should.have.property('userId').eq('60d0fe4f5311236168a109ca');
                    response.body.should.have.property('aiId').eq('60d0fe4f5311236168a109cb');
                    response.body.should.have.property('transactionHash').eq('0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7');
                    done();
                });
        });
    });

    describe('GET /blockchain/:id', () => {
        it('It should GET a blockchain transaction by ID', (done) => {
            const id = '60d0fe4f5311236168a109ca';
            chai.request(server)
                .get('/blockchain/' + id)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('userId').eq('60d0fe4f5311236168a109ca');
                    response.body.should.have.property('aiId').eq('60d0fe4f5311236168a109cb');
                    response.body.should.have.property('transactionHash').eq('0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7');
                    done();
                });
        });
    });
});
```