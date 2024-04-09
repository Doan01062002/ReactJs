let a:any = 4;
let b:unknown = 5;

console.log(a.toUpperCase());// khi chạy trên web mới bắt đầu báo lỗi trên màn hình consolog
console.log(b);// khi ta khai báo b.toUpperCase() thì trên màn hình ts sẽ báo lỗi

// ==> unknown sẽ chặt chẽ hơn any khi kiểm tra