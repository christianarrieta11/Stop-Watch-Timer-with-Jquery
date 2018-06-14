

        var i = 1;
            $("#startButton").click(function (e) {
                setInterval(function () {
                    $("#stopWatch").html(i);
                    i++;
            }, 1000);
    });
        
        $("#resetButton").click(function (e) {
            i = 0;
                });

       
        
