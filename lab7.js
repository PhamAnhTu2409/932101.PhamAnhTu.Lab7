output = document.querySelector("#out");

kvadr =() =>{
    number = document.querySelector("#input").value;
    for(var i = 0; i<number; i++){
        width = Math.random()*120+10;
        kv = document.createElement("div");
        kv.classList.add("kvadr");
        kv.style.width=width + "px";
        kv.style.height=width + "px";
        SetPosition(kv);
        kv.addEventListener("dblclick", del);
        output.appendChild(kv);
    }
}

Treu =() =>{
    number = document.querySelector("#input").value;
    for(var i = 0; i<number; i++){
        width = Math.random()*100+10;
        tr = document.createElement("div");
        tr.classList.add("treug");
        tr.style.borderLeftWidth=width + "px";
        tr.style.borderRightWidth=width + "px";
        tr.style.borderBottomWidth=width + "px";
        SetPosition(tr);
        tr.addEventListener("dblclick", del);
        output.appendChild(tr);
    }
}

Krug =() =>{
    number = document.querySelector("#input").value;
    for(var i = 0; i<number; i++){
        width = Math.random()*100+10;
        kr = document.createElement("div");
        kr.classList.add("krug");
        kr.style.width=width + "px";
        kr.style.height=width + "px";
        kr.style.borderRadius=width/2 + "px";
        SetPosition(kr);
        kr.addEventListener("dblclick", del);
        output.appendChild(kr);
    }
}

SetPosition=(shape)=>{
    top1 = Math.random()*500+10;
    left = Math.random()*1200+10;
    shape.style.left=left + "px";
    shape.style.top=top1 + "px";
}


del=(event)=>{
    if(event.target.className=="kvadr"||event.target.className=="treug"||event.target.className=="krug")  
        event.target.style.display = "none";
} 
