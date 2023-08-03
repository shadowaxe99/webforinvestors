```javascript
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index.js');
const should = chai.should();

chai.use(chaiHttp);

describe('User', () => {
    describe('/GET user', () => {
        it('it should GET all the users', (done) => {
            chai.request(server)
                .get('/user')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });

    describe('/POST user', () => {
        it('it should POST a user ', (done) => {
            let user = {
                name: "John Doe",
                email: "john@example.com"
            }
            chai.request(server)
                .post('/user')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('User successfully added!');
                    res.body.user.should.have.property('name');
                    res.body.user.should.have.property('email');
                    done();
                });
        });
    });

    describe('/PUT/:id user', () => {
        it('it should UPDATE a user given the id', (done) => {
            let user = { name: "Jane Doe", email: "jane@example.com" }
            chai.request(server)
                .put('/user/' + user.id)
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('User updated!');
                    res.body.user.should.have.property('name').eql('Jane Doe');
                    done();
                });
        });
    });

    describe('/DELETE/:id user', () => {
        it('it should DELETE a user given the id', (done) => {
            let user = { name: "Jane Doe", email: "jane@example.com" }
            chai.request(server)
                .delete('/user/' + user.id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('User successfully deleted!');
                    done();
                });
        });
    });
});
```