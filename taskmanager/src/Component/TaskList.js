import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const task1 = [{
    id: 1,
    name: 'Take out the trash',
    description: 'Take out the trash to the front of the house',
    assignedTo: 'Nick',
    dueDate: '2020-09-20',
    status: 'TODO'
}, {
    id: 2,
    name: 'Cook Dinner',
    description: 'Prepare a healthy serving of pancakes for the family tonight',
    assignedTo: 'Nick',
    dueDate: '2020-09-20',
    status: 'TODO'
}]

export default class TaskList extends React.Component {
    constructor(props) {
        super(props)
        this.tasks = [task1]
        this.currentId = 0
    }

    addTask() {
        this.tasks.push({task1})
    }

    render() {
        return(
            <div>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Task Edit</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div>
                            Task ID: {this.tasks[0].id}
                        </div>
                        <div>
                            Title: {this.tasks[0].name}
                        </div>
                        <div>
                            Description: {this.tasks[0].description}
                        </div>
                        <div>
                            Assigned To: {this.tasks[0].assignedTo}
                        </div>
                        <div>
                            Due Date: {this.tasks[0].dueDate}
                        </div>
                        <div>
                            Status: {this.tasks[0].status}
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>

            </div>
        )
    }
}