
document.getElementById("action").addEventListener('click', () =>{
    fetch('https://apis.scrimba.com/bored/api/activity')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const idea = document.getElementById('idea-box')
        idea.textContent = data.activity
        document.getElementById('main-heading').textContent = "🦾 HappyBot ⚡" 
        document.body.classList.add("happy")
    })

})
