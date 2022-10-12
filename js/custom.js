$("document").ready(function(){

    //마우스를 이미지에올리면 자동스크롤되는 스크립트/
    $("body").swipe({
        swipe: function(event, direction){

            if(direction=="up"){
                count++;
                if(count>$(".section").length-1){
                    count=$(".section").length-1;
                }

            }else if(direction=="down"){
                count--;
                if(count<0){
                    count=0;
                }
            }else if(direction=="left"){
            }else if(direction=="right"){   
            }
        }
    })


  

})