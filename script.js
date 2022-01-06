var list = document.getElementsByTagName("p");

for (let i = 0; i < list.length; i++){
    list[i].addEventListener("click", function(){
        var p = document.createElement("p");
        document.body.appendChild(p);
        var text = document.createTextNode("JS c'est trop super");
        p.appendChild(text);
        this.remove()
    })
};