function check<T>(a:T){
    if(a){
        return console.log("Xin chào");
    }else{
        return console.log("Tạm biệt");
    }
}

let greeting: boolean = true

check(greeting)