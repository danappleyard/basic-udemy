import './hello-world-button.scss';

class HelloWorldButton {
    buttonCssClass = "hello-world-button"
    render() {
        const button = document.createElement("button");
        button.innerHTML = "Hello world";
        button.classList.add(this.buttonCssClass);
        
        const body = document.querySelector("body");

        let counter = 1;
        button.onclick = () => {
            fetch('https://jsonplaceholder.typicode.com/posts/' + counter)
            .then(response => response.json())
            .then(json => {
                const d = document.createElement("div");
                d.classList.add("section");
                const h = document.createElement("h3");
                h.innerHTML =json.title;
                d.appendChild(h);
                const p = document.createElement("p");
                p.innerHTML = json.body;
                p.classList.add("hello-world-text");
                d.appendChild(p);
                body.appendChild(d);
                counter += 1;
            }); 
        }
        
        body.appendChild(button);
    }
}

export default HelloWorldButton;