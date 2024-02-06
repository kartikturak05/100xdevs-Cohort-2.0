<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React </title>
</head>
<body>

    <div id="buttonParent"></div>
    <!-- <button onclick="onButtonPres()" id="btn" >Counter 0</button> -->

    <script>
        // function onButtonPres(){
        //     const currvalue = document.getElementById("btn").innerHTML;
        //     console.log(currvalue);
        //     const currentcounter = currvalue.split(" ")[1];
        //     const newcounter = parseInt(currentcounter)+1;
        //     document.getElementById("btn").innerHTML = "Counter "+newcounter;
        // }



        let state = {
            count :0
        }

        function onButtonPress(){
        state.count++;
        buttonComponentReRender();            
        }

        function buttonComponentReRender(){
            document.getElementById("buttonParent").innerHTML = "";
            const component = buttonComponent(state.count);
            document.getElementById("buttonParent").appendChild(component);
            }

        function buttonComponent(counter){
            const button = document.createElement("button");
            button.innerHTML = `Counter ${counter}`
            button.setAttribute("onclick",'onButtonPress()');
            return button;
        }

        buttonComponentReRender();
    </script>
</body>
</html>
