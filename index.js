/*
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
  }
}

// Run once when page loads
checkWidth();

// Run again automatically when window is resized
window.addEventListener('resize', checkWidth);
*/


const mediaQuery = window.matchMedia("(max-width: 600px)");

function handleScreenChange(e) {
  if (e.matches) {
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
  }
}

// Run once on load
handleScreenChange(mediaQuery);

// Run automatically when media query changes
mediaQuery.addEventListener('change', handleScreenChange);
