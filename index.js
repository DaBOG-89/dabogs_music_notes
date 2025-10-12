if ($(window).width() <= 600) {
        $("div.container_1").hide();

        $("div.topic_menu > button").show().click(function () {
            $("div.container_1").toggle();    
         })

        $("h3, p").click(function () {
            $("div.container_1").hide(); 
        })

        $("div.container_2 > div iframe").hover(function () {
            $("div.container_1").hide();
        })
}
else {
    $("div.container_1").show();
    $("div.topic_menu > button").hide();  
}

