//Initializing the ES6 GitHub Clss
const github = new Github;

//Initializing the ES6 UI Clss
const ui = new UI;

//Searching for the Input
const searchUser = document.getElementById('searchUser');

//Searching for the Input Event Listener
searchUser.addEventListener('keyup', (e) => {

    //Getting the Text that is Typed in by the User
    const userText = e.target.value;

    if(userText !== ''){

        //Making HTTP Call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message == 'Not Found'){

                //Creating an Alert that Shows Up when the User Types in a GitHub Account that is not found
                ui.showAlert('User Not Found', 'alert alert-danger');

            } else {

                //Showing A Profile if the User Types in A User that 
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);

            }
        })
    } else{

        //Clearing the Profile 
        ui.clearProfile();

    }
});