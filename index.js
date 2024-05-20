const routes = {
    "/": "/home.html",
    "/universe": "/universe.html",
    "/exploration": "/exploration.html"
}


function route(event){
    event = event || window.event;

    event.preventDefault(); 

    window.history.pushState({}, "", event.target.href);    

    handle();
}

function handle(){
    const { pathname } = window.location;

    const route = routes[pathname];

    fetch(route).then(data => data.text()).then(html => {

        document.querySelector('#app').innerHTML = html;
    })

}

handle();

window.onpopstate = () => route();
window.route = () => route();

    
