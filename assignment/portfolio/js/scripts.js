document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.github.com/users/iNihilistx').then(response => response.json()).then(data => {
        const githubStatusSection = document.querySelector('.github-stats');
        if(githubStatusSection){
            githubStatusSection.innerHTML = 
            `<h2>${data.name} GitHub Statistics</h2><br>
            <p><img src="${data.avatar_url}" alt="Avatar" style="width: 100px; height: auto; border: 2px solid #40b9e9; border-radius: 50%; padding: 5px;"></p>
            <p>Following: ${data.following}</p>
            <p>Followers: ${data.followers}</p>
            <p>Public Repos: ${data.public_repos}</p>`;
            githubStatusSection.style.display = 'block';
        }
        else{
            console.error('Error: GitHub Repo not found')
        }
    })
    .catch(error => console.error('Error Fetching Stats'))
})