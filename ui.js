class UI{

    constructor(){

        this.profile = document.getElementById('profile');

    }

    //Creating Function to Display Profile in the UI 
    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-block btn-primary">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-primary">Public Gist: ${user.public_gists}</span>
                        <span class="badge badge-primary">Followers: ${user.followers}</span>
                        <span class="badge badge-primary">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }

    //Showing the User's First Five Repositories
    showRepos(repos){

        let output = '';
        repos.forEach(function(repo){

            output += `
            <div class = "card card-body mb-2">
                <div class = "row">

                    <div class = "col-md-6">

                        <a href = "${repo.html_url}" target="_blank">${repo.name}</a>
                    
                    </div>
                    <div class = "col-md-6">

                        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-primary">Forks: ${repo.forks_count}</span>

                    </div>
                </div>
            </div>
            `;
        });

        //Outputting the Repositories
        document.getElementById('repos').innerHTML = output;


    }


    //Creating a function to Show Alert
    showAlert(message, className){

        //Clearing any Remaining Alerts
        this.clearAlert();

        //Creating a Div for the Alert so we can Show it in the UI
        const div = document.createElement('div');

        //Giving the Created Div a Class Name
        div.className = className;

        //Adding Text to the Created Div
        div.appendChild(document.createTextNode(message));

        //Targeting the Parent Element First
        const container = document.querySelector('.searchContainer');

        //Getting the Search Box
        const search = document.querySelector('.search')

        //Inserting the Alert Message into the UI before the Container
        container.insertBefore(div, search);

        //Timing Out the Alert After Three Seconds
        setTimeout(() => {

            this.clearAlert();

        }, 3000);

    }

    //Clearing the Alert Message
    clearAlert(){

        const currentAlert = document.querySelector('.alert');

        if(currentAlert){

            currentAlert.remove();

        }
    }

    //Creating a Function to Clear Profile when the User Deletes their Text in the Search Bar
    clearProfile(){

        this.profile.innerHTML = '';

    }
}