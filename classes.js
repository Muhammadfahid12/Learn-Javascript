// class Team {
//     constructor() {
//         this.wins = 0;
//         this.losses = 0;
//     }
//     changeRecord(isWin) {
//         if(isWin) {
//             this.wins++;
//         }
//         else {
//             this.losses++;
//         }
//     }
// }
// // create a new team instance
// const myTeam = new Team();

// // call the changeRecord method with isWin set to true
// myTeam.changeRecord(true);
// myTeam.changeRecord(true)
// // call the changeRecord method with isWin set to false

// console.log('wins are ',myTeam.wins)
// // log the current record of the team
// // console.log(`Wins: ${myTeam.wins}, Losses: ${myTeam.losses}`);



// class Hero {
//     constructor() {
//        this.health =50;
//     }
//     takeDamage(num){
//         this.health=this.health- num
//     }
// }
// const h1= new Hero()
// console.log('Before ',h1.health)
// h1.takeDamage(15)
// console.log('After ',h1.health)

class Shape {
    constructor() {
        this.position = { x: 0, y: 0 }
    }
}

class Rectangle extends Shape {
    
}
const infer = new Rectangle ()
console.log(infer)
