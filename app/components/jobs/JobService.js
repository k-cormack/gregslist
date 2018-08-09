import Job from "../../models/Job.js"

let jobs = []

export default class JobService {
    constructor() {

    }
    getJobs() {
        let jobsCopy = []
        jobs.forEach(job => {
            jobsCopy.push(new Job(
                job.title,
                job.location,
                job.salary,
                job.description,
                job.imgUrl
            ))
        })
        return jobsCopy
    }

    addJob(formData) {
        let newJob = new Job(
            formData.title.value,
            formData.location.value,
            formData.salary,
            formData.description.value,
            formData.imgUrl.value
        )
        jobs.push(newJob)
    }

}