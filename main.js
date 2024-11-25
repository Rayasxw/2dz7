
class Cars {
    constructor(options) {
      this.model = options.model; 
      this.color = options.color; 
      this.wheels = options.wheels; 
    }
  
    
    start() {
      console.log(`${this.model} завелся!`);
    }
  }
  
 
  class Bus extends Cars {
    constructor(options) {
      super(options); 
      this.passengerCapacity = options.passengerCapacity; 
    }
  }
  
  
  class Motorcycle extends Cars {
    constructor(options) {
      super(options);
      this.type = options.type; 
    }
  }
  
 
  class SUV extends Cars {
    constructor(options) {
      super(options);
      this.allWheelDrive = options.allWheelDrive; 
    }
  }
  
 
  const bus = new Bus({
    model: 'Mercedes-Benz Citaro',
    color: 'yellow',
    wheels: 6,
    passengerCapacity: 100,
  });
  
  
  const motorcycle = new Motorcycle({
    model: 'Yamaha YZF-R1',
    color: 'blue',
    wheels: 2,
    type: 'Спортивный',
  });
  
  const suv = new SUV({
    model: 'Land Rover Defender',
    color: 'green',
    wheels: 4,
    allWheelDrive: true,
  });
  
  
  console.log(bus);
  console.log(motorcycle);
  console.log(suv);
  
  
  bus.start(); 
  motorcycle.start(); 
  suv.start(); 
  





 class TrafficLight {
    constructor() {
      this.redLight = document.querySelector("#redLight");
      this.yellowLight = document.querySelector("#yellowLight");
      this.greenLight = document.querySelector("#greenLight");
    }

    
    turnOn(color) {
      this.resetLights();
      if (color === 'красный') {
        this.redLight.classList.add('active');
        this.redLight.textContent = 'STOP';
      } else if (color === 'желтый') {
        this.yellowLight.classList.add('active');
        this.yellowLight.textContent = 'WAIT';
      } else if (color === 'зеленый') {
        this.greenLight.classList.add('active');
        this.greenLight.textContent = 'GO';
      } else {
        alert('Выберите один из цветов: красный, желтый или зеленый');
      }
    }

    
    resetLights() {
      this.redLight.classList.remove('active');
      this.redLight.textContent = '';
      this.yellowLight.classList.remove('active');
      this.yellowLight.textContent = '';
      this.greenLight.classList.remove('active');
      this.greenLight.textContent = '';
    }
  }

  
  const trafficLight = new TrafficLight();

  const userColor = prompt('Введите цвет светофора: красный, желтый или зеленый').toLowerCase().trim();

  
  trafficLight.turnOn(userColor);