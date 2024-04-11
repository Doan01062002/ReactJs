"use strict";
class Song {
    constructor(id, name, length) {
        this.id = id;
        this.name = name;
        this.length = length;
    }
    get song() {
        return console.log(this.id + " " + this.name + " " + this.length);
    }
    set changeName(name) {
        this.name = name;
    }
    set changeLength(length) {
        this.length = length;
    }
}
let song1 = new Song(1, "chung ta", 100);
song1.changeName = "cua tương lai";
song1.changeLength = 200;
console.log(song1);
