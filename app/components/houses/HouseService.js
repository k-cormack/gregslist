import House from "../../models/House.js";

let houses = []

export default class HouseService {
    constructor() {
    }
    getHouses() {
        let housesCopy = []
        houses.forEach(house => {
            housesCopy.push(new House(
                house.beds,
                house.baths,
                house.size,
                house.year,
                house.price,
                house.imgUrl
            ))
        })
        return housesCopy
    }
    addHouse(formData) {
        let newHouse = new House(
            formData.beds.value,
            formData.baths.value,
            formData.size.value,
            formData.year.value,
            formData.price.value,
            formData.imgUrl.value
        )
        houses.push(newHouse)
    }
}