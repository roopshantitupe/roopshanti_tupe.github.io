function checkValidation(){
         var x = document.getElementById("myText").value;
        

        const error_state = document.getElementById("myText");
         
         var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const btn_color = document.getElementById("button_style");
        var y = document.getElementById("valid-email-error");
        const container = document.getElementsByClassName("container");
        
        if (x.match(pattern)) {
            error_state.style.border = "1px solid green";
            error_state.style.background = "#E1FCE8";
            location.href ="html2.html";

            exports =  {x};
            
         }
         else{
            y.style.visibility = "visible";
            error_state.style.border = "1px solid orange";
            error_state.style.background = "#FFE0D7";
            error_state.style.color = "red";

            }
         }