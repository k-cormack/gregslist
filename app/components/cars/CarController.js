import CarService from "./CarService.js";

let carService = new CarService()

function drawCars() {
  let cars = carService.getCars()
  let template = ''

  for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    template += `
    <div style="outline: 1px solid black" class="col-3">
        <p>Make: ${car.make}</p>
        <p>${car.model}</p>
        <p>${car.price}</p>
        <p>${car.year}</p>
        <p>${car.color}</p>
        <img src="${car.imgUrl}" alt="somethingelse">
    </div>
    `
  }

  document.getElementById('cars').innerHTML = template


}

export default class CarController {

  constructor() {
    drawCars()
  }

  addCar(triggeredEvent) {
    triggeredEvent.preventDefault();
    let formData = triggeredEvent.target
    carService.addCar(formData)
    formData.reset()
    drawCars()
  }

}