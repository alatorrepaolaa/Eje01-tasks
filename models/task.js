module.exports = class Task {
    constructor (id, title, description, done=false,createdAT=(new Date)) {
        this.id = id;
        this.tittle = title;
        this.description = description;
        this.done = done;
        this.createdAT = createdAT;
    }

    renew (newTitle, newDescription, done) {
        this.title = newTitle;
        this.description = newDescription;
        this.done = done;
    }
}
