const Lab = require('Lab');
const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const before = lab.before;

const Code = require('Code');
const expect = Code.expect;

const Sinon = require('Sinon');

const Server = require('..');

describe('Get /', () => {
    it('Should return 200 status', (done) => {
        Server.inject('/', (response) => {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});
