
class Animal {
    constructor(public name: string, public age: number) {}
  
    makeSound(): void {
      console.log(`${this.name} makes a sound`);
    }
  }
  

  interface SleepAndWalk {
    sleep(): void;
    walk(): void;
  }
  
  interface JumpAndRun {
    jump(): void;
    run(): void;
  }
  
  interface SwimAndHunt {
    swim(): void;
    hunt(): void;
  }
  
 
  class SleepWalkAnimal extends Animal implements SleepAndWalk {
    constructor(name: string, age: number) {
      super(name, age);
    }
  
    sleep(): void {
      console.log(`${this.name} is sleeping`);
    }
  
    walk(): void {
      console.log(`${this.name} is walking`);
    }
  }
  
  class JumpRunAnimal extends Animal implements JumpAndRun {
    constructor(name: string, age: number) {
      super(name, age);
    }
  
    jump(): void {
      console.log(`${this.name} is jumping`);
    }
  
    run(): void {
      console.log(`${this.name} is running`);
    }
  }
  
  class SwimHuntAnimal extends Animal implements SwimAndHunt {
    constructor(name: string, age: number) {
      super(name, age);
    }
  
    swim(): void {
      console.log(`${this.name} is swimming`);
    }
  
    hunt(): void {
      console.log(`${this.name} is hunting`);
    }
  }
  

  class Zebra extends SleepWalkAnimal {
    constructor(name: string, age: number, public maxSpeed: number, public origin: string) {
      super(name, age);
    }
  }
  
  class Elephant extends SleepWalkAnimal {
    constructor(name: string, age: number, public weight: number) {
      super(name, age);
    }
  }
  
  class Tiger extends JumpRunAnimal {
    constructor(name: string, age: number, public isOutsideCage: boolean = false) {
      super(name, age);
    }
  
    setIsOutsideCage(isOutsideCage: boolean): void {
      this.isOutsideCage = isOutsideCage;
    }
  }
  


  
  class Zookeeper {
    constructor(public name: string) {}
  
    feedAnimal(animal: Animal): void {
      const currentTime = new Date();
      console.log(`${this.name} feeds ${animal.name} at ${currentTime}`);
    }
  }
  
 
  const zebra = new Zebra("Name1", 5, 60, "Someplace");
  const elephant = new Elephant("Name2", 10, 5000);
  const tiger = new Tiger("Name3", 7);
  
  const zookeeper = new Zookeeper("John");
  zookeeper.feedAnimal(zebra);
  zookeeper.feedAnimal(elephant);
  zookeeper.feedAnimal(tiger);
  
  zebra.sleep();
  zebra.walk();
  
  tiger.setIsOutsideCage(true);
  console.log(`${tiger.name} is outside the cage: ${tiger.isOutsideCage}`);