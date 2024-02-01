<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Foundation</title>

    <script>
        let globid = 1;

        function markAsDone(id){
            const parent = document.getElementById(id);
            parent.children[2].innerHTML = "DONE!"
        }
        function createChild(title,description,id){
            const child = document.createElement("div");
            const firstGrandChild = document.createElement("div");
            firstGrandChild.innerHTML = title;
            const secondGrandChild = document.createElement("div");
            secondGrandChild.innerHTML = description;
            const thirdGrandChild = document.createElement("button");
            thirdGrandChild.innerHTML = "Mark as done";
            thirdGrandChild.setAttribute("onclick",`markAsDone(${id})`);
            child.appendChild(firstGrandChild);
            child.appendChild(secondGrandChild);
            child.appendChild(thirdGrandChild);
            child.setAttribute("id",id);
            return child;
        }
        
        function addTodo(){
            const title = document.getElementById("title").value;
            const description = document.getElementById("description").value;

            const original = document.getElementById("container");


            original.appendChild(createChild(title,description,globid++));
           

            // document.getElementById("container").innerHTML = original+`<div> 
            //         <div> ${title}</div>
            //         <div>${description}</div>
            //         <button>mark as done</button>
            //     </div>
            // `
            
            document.getElementById("title").value = "";
            document.getElementById("description").value = "";

        }
    </script>
</head>
<body>
    <div >
        <br>
        <input id="title" type="text" placeholder="title"><br><br>
        <input id="description" type="text" placeholder="description"><br><br>
        <button onclick="addTodo()">add todo</button>

        <div id="container">
    
        </div>
    </div>
</body>
</html>
