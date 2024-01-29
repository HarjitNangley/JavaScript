class Car{
    setName(name){
        this.name=name;
    }
    startEngine(){
        console.log('Engine started for '+ this.name);
    }
    stopEngine(){
        console.log('Engine stopped for ' + this.name);
    }
}
class Toyota extends Car{
    topSpeed(speed){
        console.log('Top speed of the car ' + this.name + ' is '+ speed)
    }
}
let myCar = new Toyota();
myCar.setName('Prius');
myCar.startEngine();
myCar.stopEngine();
myCar.topSpeed(200);