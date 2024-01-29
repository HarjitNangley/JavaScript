class Animal{
    
    constructor(name){
        this.name = name
    }

    eats(){
        console.log(this.name+' eats food');
    }
}

class Alligator extends Animal{
    //this is a method overide 
    //because it overrides the one in parent
    eats(){
        //to call the one in parent
        super.eats();
        //then to do my own bits
         console.log(this.name+' eats fishes');
     }
}
let murphy = new Alligator('Murphy');
murphy.eats();
