var obj = {
    get a() {
        return this._a_ * 2;
    },
    set a(val) {
        this._a_ = val * 3;
    },
};

console.log(obj);
obj.a = 5;
console.log(obj);
console.log(obj.a);