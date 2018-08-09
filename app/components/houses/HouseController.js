import HouseService from "./HouseService.js"

let houseService = new HouseService()

function drawHouses() {
    let houses = houseService.getHouses()
    let template = ''

    for (let i = 0; i < houses.length; i++) {
        const house = houses[i];
        template = `
        <div style="outline: 1px solid black" class="col-3">
        <p>${house.beds}</p>
        <p>${house.baths}</p>
        <p>${house.size}</p>
        <p>${house.year}</p>
        <p>${house.price}</p>
        <img src="${house.imgUrl}" alt"">
        </div>
        `
    }
}
export default class HouseController {
    constructor() {
        drawHouses()
    }
    addHouse(triggeredEvent){
        triggeredEvent.preventDefault();
        let formData = triggeredEvent.target
        houseService.addHouse(formData)
        formData.reset()
        drawHouses()
    }    
}
