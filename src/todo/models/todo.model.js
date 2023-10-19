export class Todo {
    /**
     *
     * @param {String} description
     */
    constructor(description) {
        //TODO: cambiar ID
        this.id = 1;
        this.description = description;
        this.done = false;
        this.createdAt = new Date();
    }
}
