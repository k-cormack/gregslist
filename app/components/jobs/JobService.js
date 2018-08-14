import Job from "../../models/Job.js"

//Creates a new HTTP Request object
const jobsApi = axios.create({
    //base connection url
    baseURL: 'https://bcw-gregslist.herokuapp.com/api/jobs/',//this is Axios url format
    //wait 3 seconds for response
    timeout: 3000
})

export default class JobService {
    constructor() {

    }
    getJobs(draw) {
        jobsApi.get()
            .then(res => {
                //converts each raw house data into House class objects
                let jobs = res.data.data.map(rawJob => {
                    return new Job(rawJob)
                })
                //callback function to draw jobs
                draw(jobs)
            })
    }

    addJob(formData, draw) {
        let newJob = new Job({
            company: formData.company.value,
            jobTitle: formData.jobTitle.value,
            hours: formData.hours.value,
            rate: formData.rate.value,
            description: formData.description.value,
        })
        jobsApi.post('', newJob)
            .then(res => {
                this.getJobs(draw)
            })
    }
}