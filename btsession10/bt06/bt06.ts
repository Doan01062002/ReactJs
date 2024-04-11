class Song{
    public readonly id:number;
    private name:string;
    private length:number

    constructor(id:number, name:string, length:number){
        this.id = id;
        this.name = name;
        this.length = length
    }

    get song():any{
        return console.log(this.id+" "+this.name +" "+ this.length);
    }

    set changeName(name:string){
        this.name = name;
    }

    set changeLength(length:number){
        this.length = length
    }
}

let song1 = new Song(1, "chung ta", 100);

song1.changeName = "cua tương lai"
song1.changeLength = 200

console.log(song1);
