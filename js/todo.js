$(document)
    .ready(function () {

        function generateUUID() {
            /*jshint bitwise:false */
            var i,
                random;
            var uuid = '';

            for (i = 0; i < 32; i++) {
                random = Math.random() * 16 | 0;
                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-';
                }
                uuid += (i === 12
                    ? 4
                    : (i === 16
                        ? (random & 3 | 8)
                        : random)).toString(16);
            }
            return uuid;
        }

        $('#button').click(function(){
            let content = $("input[name='ListItem']").val();
            let id=generateUUID();
            if(content){
                $("ol").append (`<li id=${id} class=""><input name="done-todo" type="checkbox" class="done-todo"> ${content} </li>`);
            }
            $("input.input-text").val("");

        });


        $("ol li").on("click",function(){
            let currentClass = $(this).attr("class");
            //alert(currentClass);
            if(currentClass == "checked"){
                $(this).removeClass();
            }else {
                $(this).addClass("checked");
            }
        })

        $("ol li").click(function(){
            $(this).attr("contentEditable",true);

        })


        $("a[data-filter=all]").click(function(){
            $(this).addClass("selected");
            $("ol li").css("display","");
        });

        $("a[data-filter=active]").click(function(){
            $(this).addClass("selected");
            $("ol").children().filter('.checked').css("display","none")
            $("ol").children().not('.checked').css("display","")
        });

        $("a[data-filter=complete]").click(function(){
            $(this).addClass("selected");
            $("ol").children().not('.checked').css("display","none")
            $("ol").children().filter('.checked').css("display","")
        });


        

     
        // code to be implemented
    });
    
    

  
    
   
    
    
       

    

