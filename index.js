function checkWidth() {
  if (window.innerWidth < 600) {
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
  } else {
        $("div.container_1").show();
        $("div.topic_menu > button").hide();
        $("div.container_2 > div iframe").hover(function () {
            $("div.container_1").show();
        })
  }
}

// Run once when page loads
checkWidth();

// Run again automatically when window is resized
window.addEventListener('resize', checkWidth);
