"use strict";
;
let student = [
    { id: 1, name: 'John', class: 'A' },
    { id: 2, name: 'Jane', class: 'B' },
    { id: 3, name: 'Mike', class: 'A' },
    { id: 4, name: 'Emily', class: 'C' },
    { id: 5, name: 'David', class: 'B' }
];
function filterStudent(student, className) {
    return student.filter(student => student.class === className);
}
console.log(filterStudent(student, 'A'));
