class Controller {

    taskList = [{
        title: 'Sample task',
        description: 'This is a sample task! Use the button below to close this task. Closing will also mean that this task will be deleted from the storage.',
        color: '#aa00ff'
    }]

    addNewTask(title, description, color) {
        const task = {
            title: title,
            description: description,
            color: color
        }
        this.taskList.push(task)

        window.localStorage.setItem(title, task)
    }

    findTaskByTitle(title) {
        return this.taskList.find(elm => elm.title === title)
    }

    deleteTask(title) {
        const task = this.findTaskByTitle(title)

        this.taskList = this.taskList.filter(elm =>
            elm.title !== task.title
        )
        window.localStorage.removeItem(title)
    }


    /*
    USED FOR DEVELOPING 
    */
    populateTaskListSampleData() {
        for (let i = 1; i <= 10; i++) {
            this.taskList.push({
                title: `task ${i}`, description: `task ${i} description`, color: `#${i}f00ff`
            })
        }
    }

    /*
    Create a master list name "taskNameStorage" containing all the names of the tasks title
    Populate from the master list all the tasks
    */
    populateTaskList() {
        // const nameArr = window.localStorage.getItem('taskNameStorage')
    }
}

export default Controller
