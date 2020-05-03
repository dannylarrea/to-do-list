document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#new-task').onsubmit = () => {

        // Create new item for list
        const div = document.createElement('div');
        div.className =  'alert alert-info alert-dismissible';
        div.innerHTML = '<button type="button" class="close" data-dismiss="alert">&times;</button>' + document.querySelector('#task').value;

        // Add new item to task list
        document.querySelector('#tasks').append(div);

        // Clear input field
        document.querySelector('#task').value = '';

        // Stop form from submitting
        return false;
    };

});

