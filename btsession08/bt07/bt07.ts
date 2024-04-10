function check(a:number|string|object):void{
    if(typeof(a) === "number" || typeof(a) === "string" || typeof(a) === "object"){
        console.log(typeof(a))
    }else{
        console.log("kiểu dữ liệu khác")
    }
}

console.log(check(1));
