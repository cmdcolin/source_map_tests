var doodle='whyyyy';
console.log(doodle)
function woot() {
    this.test = function(lol) {
        console.log(lol);
        this.blah(lol);
    }
    this.blah = function(wtf) {
        console.log(wtf)
            throw Error('lol');
    }
    return this;
}

var s = woot();
s.test('wut');


//# sourceMappingURL=script.js.map
