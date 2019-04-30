const assert = require('assert');
const uppercaseSQL = require('../lib/uppercase-sql');

describe('uppercaseSQL', function () {
    it("insert into abc (c1, c2, c3) values(3, 4, '5')", function () {
        assert.equal(
            uppercaseSQL("insert into abc (c1, c2, c3) values(3, 4, '5')")
                , "INSERT INTO abc (c1, c2, c3) VALUES(3, 4, '5')");
    });

    it("select p.* from Abc p where abcIndex in (SELECT c.`index` FROM def c WHERE p.ddee = c.ddee)", function () {
        assert.equal(
            uppercaseSQL("select p.* from Abc p where abcIndex in (SELECT c.`index` FROM def c WHERE p.ddee = c.ddee)")
                , "SELECT p.* FROM Abc p WHERE abcIndex IN (SELECT c.`index` FROM def c WHERE p.ddee = c.ddee)");
    });
});