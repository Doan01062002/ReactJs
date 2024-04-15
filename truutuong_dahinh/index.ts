/*
1. Tính trừu tượng (Abstraction):
    + Trong TypeScript, bạn có thể tạo lớp trừu tượng (abstract class) bằng cách sử dụng từ khóa abstract. Một lớp trừu tượng không thể được khởi tạo trực tiếp, mà chỉ có thể được kế thừa bởi các lớp con.
    + Một lớp trừu tượng có thể chứa các thuộc tính và phương thức như bình thường, nhưng nó cũng có thể khai báo các phương thức trừu tượng (abstract methods). Các phương thức trừu tượng không có thân hàm và chỉ định các hợp đồng mà các lớp con cần triển khai.
    + Một lớp con kế thừa từ lớp trừu tượng phải triển khai tất cả các phương thức trừu tượng được khai báo trong lớp trừu tượng, nếu không TypeScript sẽ cảnh báo lỗi.

 */

    abstract class Animal {
        abstract makeSound(): void;
      
        eat(): void {
          console.log("Eating...");
        }
      }
      
      class Cat extends Animal {
        makeSound(): void {
          console.log("Meow!");
        }
      }
      
      const myCat: Animal = new Cat();
      myCat.makeSound(); // Output: Meow!
      myCat.eat(); // Output: Eating...

      //Trong ví dụ trên, lớp Animal là một lớp trừu tượng với một phương thức trừu tượng makeSound và một phương thức không phải trừu tượng eat. Lớp Cat kế thừa từ Animal và triển khai phương thức makeSound. Đối tượng myCat được tạo ra từ lớp Cat và có thể gọi cả phương thức makeSound và eat.

/*
2. Tính đa hình (Polymorphism):
      + Trong TypeScript, đa hình cho phép một phương thức có thể có các hình thức khác nhau khi được triển khai trong các lớp con.
      + Để thực hiện đa hình, bạn có thể định nghĩa một phương thức trong lớp cha và ghi đè nó trong lớp con bằng cách sử dụng từ khóa override. Khi gọi phương thức đa hình, hành vi của phương thức sẽ phụ thuộc vào lớp con mà đối tượng được tạo ra từ đó.
      + Đa hình có thể được sử dụng với cả lớp và phương thức.
 */

      class Shape {
        draw(): void {
          console.log("Drawing a shape");
        }
      }
      
      class Circle extends Shape {
        draw(): void {
          console.log("Drawing a circle");
        }
      }
      
      class Rectangle extends Shape {
        draw(): void {
          console.log("Drawing a rectangle");
        }
      }
      
      const shapes: Shape[] = [new Circle(), new Rectangle()];
      
      for (const shape of shapes) {
        shape.draw();
      }

      //Trong ví dụ trên, lớp Shape có một phương thức draw. Lớp Circle và Rectangle kế thừa từ Shape và ghi đè phương thức draw của nó. Mảng shapes chứa đối tượng của cả Circle và Rectangle. Trong vòng lặp, phương thương thức draw được gọi trên mỗi đối tượng, và hành vi của phương thức sẽ phụ thuộc vào lớp con tương ứng. Kết quả sẽ in ra "Drawing a circle" và "Drawing a rectangle".