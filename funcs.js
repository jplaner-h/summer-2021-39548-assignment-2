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

Array.prototype.myFilter = function(callbackFn) {
    newArr = [];
    pos = 0;
    for(let i = 0; i < this.length; i++) {
        if(callbackFn(this[i], i, this)) {
            newArr[pos] = this[i];
            pos++;
        }
    }

    return newArr;
};

Array.prototype.mySome = function(callbackFn) {
    for(let i = 0; i < this.length; i++) {
        if(callbackFn(this[i], i, this)) {
            return true;
        }
    }
};

Array.prototype.myEvery = function(callbackFn) {
    for(let i = 0; i < this.length; i++) {
        if(callbackFn(this[i], i, this) === false) {
            return false;
        }
    }
    
    return true;
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