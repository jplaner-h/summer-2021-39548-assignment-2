Array.prototype.myEach = function(callbackFn) {
    for(let i = 0; i < this.length; i++) {
        if(this[i] === undefined) {
            continue;
        }
        callbackFn(this[i], i, this);
    }
};

Array.prototype.myMap = function(callbackFn) {
    newArr = [];
    for(let i = 0; i < this.length; i++) {
        newArr[i] = callbackFn(this[i], i, this);
    }
    return newArr;
};

Array.prototype.myPush = function(...args) {
    let arg_i = 0;
    let length =this.length;
    for(let i = length; i < length + args.length; i++) {
        this[i] = args[arg_i];
        arg_i++
    }

    return this.length;
};

arr = [1, 2, 3, 4, 5]
testMap = arr.myMap(x => x * 2);
