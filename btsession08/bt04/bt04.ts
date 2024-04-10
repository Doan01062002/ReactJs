function check(a:(number|number[])){
    if(typeof(a) === "number"){
        return a**a
    }else if(Array.isArray(a)){
        return a.map(a => a**a);
    }else{
        return console.log("không hợp lệ")
    }
}

console.log(check([2,3,4]))