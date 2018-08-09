import JobService from "./JobService.js"
import HouseService from "../houses/HouseService.js";

let jobService = new JobService()

function drawJobs() {
    let jobs = jobService.getJobs()
    let template = ''

    for (let i = 0; i < jobs.length; i++) {
        const job = jobs[i];
        template = `
        <div style="outline: 1px solid black" class="col-3">
            <p>${job.title}</p>
            <p>${job.location}</p>
            <p>${job.salary}</p>
            <p>${job.description}</p>
            <img src="${job.imgUrl}" alt"">
        </div>
        `
    }
}

export default class JobController {
    constructor() {
        drawJobs()
    }
    addJob(triggeredEvent) {
        triggeredEvent.preventDefault();
        let formData = triggeredEvent.target
        jobService.addJob(formData)
        formData.reset()
        drawJobs()
    }
}