<!DOCTYPE html>

<script>

    let timeout;
    function debounsPupulateDiv(){
        clearTimeout(timeout);

        timeout = setTimeout(function(){
            populatediv();

        },1000)
    }


    function populatediv(){
        const a = document.getElementById("firstNum").value;
        const b = document.getElementById("SecondNum").value;

        fetch("https://sum-server.100xdevs.com/sum?="+a+"&b="+b)
            .then(function response(){
                // console.log(response);

                response.text().then(function ans(){
                    // console.log(ans);
                    document.getElementById("finalSum").innerHTML = ans;
                })
            });
        // const element = document.getElementById("finalSum")
        // element.innerHTML = parseInt(a)+parseInt(b);
    }

    async function populatediv2(){
        const a = document.getElementById("firstNum").value;
        const b = document.getElementById("SecondNum").value;
        const response = await fetch("https://sum-server.100xdevs.com/sum?="+a+"&b="+b);
        const text = await response.text();
        document.getElementById("finalSum").innerHTML = ans;
    }
</script>

<body>
    <input oninput="populatediv()" id="firstNum" type="text" placeholder="First Number" ><br><br>
    <input oninput="populatediv()" id="SecondNum" type="text" placeholder="Second Number" ><br><br>
    <!-- <input type="submit" value="submit"> -->
    <button onclick="populatediv()">calculate sum</button>
    <div id="finalSum"></div>
</body>
</html>
