import House from "../../models/House.js";

//Creates a new HTTP Request object
const housesApi = axios.create({
    //base connection url
    baseURL: 'https://bcw-gregslist.herokuapp.com/api/houses',//this is Axios url format
    //wait 3 seconds for response
    timeout: 3000
})

export default class HouseService {
    constructor() {
    }
    getHouses(draw) {
        housesApi.get()
            .then(res => {
                //converts each raw house data into House class objects
                let houses = res.data.data.map(rawHouse => {
                    return new House(rawHouse)
                })
                //callback function to draw houses
                draw(houses)
            })
    }

    addHouse(formData, draw) {
        let newHouse = new House({
            beds: formData.beds.value,
            baths: formData.baths.value,
            imgUrl: formData.imgUrl.value,
            levels: formData.levels.value,
            year: formData.year.value,
            price: formData.price.value,
            description: formData.description.value
        })
        housesApi.post('', newHouse)
        .then(res => {
            this.getHouses(draw)
        })
    }
}