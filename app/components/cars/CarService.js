import Car from '../../models/Car.js'

//Creates a new HTTP Request object
const carsApi = axios.create({
  //base connection url
  // baseURL: 'https://bcw-gregslist.herokuapp.com/api/cars/',
  baseURL: '//localhost:3000/api/cars',
  //only wait 3 seconds for response
  timeout: 3000
})



export default class CarService {
  constructor() {

  }

  getCars(draw) {
    carsApi.get()
      .then(res => {
        //converts each raw car data into Car class objects
        console.log(res)
        let cars = res.data.map(rawCar => {
          return new Car(rawCar)
        })
        //callback function to draw cars
        draw(cars)
      })
  }

  addCar(formData, draw) {
    let newCar = new Car({
      make: formData.make.value,
      model: formData.model.value,
      year: formData.year.value,
      price: formData.price.value,
      description: formData.description.value || "No description of this fine vehicle available - check back soon!",
      imgUrl: formData.imgUrl.value || "http://placehold.it/160x160"
    })
    //first parameter is any addition to base url
    //second parameter is object to pass to server
    carsApi.post('', newCar)
      .then(res => {
        this.getCars(draw)
      })
  }
  deleteCar(carId, draw) {
    carsApi.delete(carId)
    .then(res => {
      this.getCars(draw)
    })
  }
  bid(carId, update, draw) {
    carsApi.put(carId, update)
    .then(res => {
      console.log(res)
      this.getCars(draw)
    })
  }
}