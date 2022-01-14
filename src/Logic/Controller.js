class Controller {

    taskList = []

    constructor() {
        this.populateTaskList()
    }

    addNewTask(title, description, color) {
        this.taskList.push({
            title: title,
            description: description,
            color: color
        })
    }

    findTaskByTitle(title) {
        return this.taskList.find(elm => elm.title === title)
    }

    deleteTask(title) {

    }

    populateTaskList() {
        for (let i = 1; i <= 10; i++) {
            this.taskList.push({
                title: `task ${i}`, description: `task ${i} description`, color: `#${i}f00ff`
            })
        }
    }
}

export default Controller
