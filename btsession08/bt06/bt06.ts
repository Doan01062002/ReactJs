function check(a:string|string[]):void{
    let checkArr = Array.isArray(a);

    if(typeof(a) === "string"){
        console.log(a)
    }else if(checkArr){
        a.forEach(a => console.log(a))
    }else{
        console.log("không thỏa mãn")
    }
};

console.log(check(["đoan", "hoàng"]))