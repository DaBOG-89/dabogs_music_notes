let topBar = $("div.topic_menu > button, p.home, p.theory, p.piano, p.violin, p.guitar, p.voice, p.recorder, p.drum_kit");

//Mouse Hover Action
topBar.mouseenter(function () {
    $(this).css("background-color", "rgba(241, 162, 211, 1)");
    $(this).css("cursor", "pointer");
})

topBar.mouseleave(function () {
    $(this).css("background-color", "rgb(211, 0, 130)");
})

$("div.landing_container").show();
$("div.big_container, button.topic_menu").hide();
//$("div.landing_display").css("width", "500pt");

let sideBars = $("div.theory_side_nav, div.piano_side_nav, div.violin_side_nav, div.guitar_side_nav, div.voice_side_nav, div.recorder_side_nav, div.drum_kit_side_nav");

let display = $("div.landing_display, div.theory_display, div.piano_display, div.violin_display, div.guitar_display, div.voice_display, div.recorder_display, div.drum_kit_display");

//Nav Bar Action Codes
$("p.home").click(function () { 
    $("div.landing_container").show();
    $("div.big_container").hide();
    display.hide();
    $("div.landing_display").show();
})

$("p.theory").click(function () {
    $("div.landing_container").hide();
    $("div.big_container").show();
    sideBars.hide();
    $("div.theory_side_nav").show();
    display.hide();
    $("div.theory_display").show();
})

$("p.piano").click(function () {
    $("div.landing_container").hide();
    $("div.big_container").show();
    sideBars.hide();
    $("div.piano_side_nav").show();
    display.hide();
    $("div.piano_display").show();
})

$("p.violin").click(function () {
    $("div.landing_container").hide();
    $("div.big_container").show();
    sideBars.hide();
    $("div.violin_side_nav").show();
    display.hide();
    $("div.violin_display").show();
})

$("p.guitar").click(function () {
    $("div.landing_container").hide();
    $("div.big_container").show();
    sideBars.hide();
    $("div.guitar_side_nav").show();
    display.hide();
    $("div.guitar_display").show();
})

$("p.voice").click(function () {
    $("div.landing_container").hide();
    $("div.big_container").show();
    sideBars.hide();
    $("div.voice_side_nav").show();
    display.hide();
    $("div.voice_display").show();
})

$("p.recorder").click(function () {
    $("div.landing_container").hide();
    $("div.big_container").show();
    sideBars.hide();
    $("div.recorder_side_nav").show();
    display.hide();
    $("div.recorder_display").show();
})

$("p.drum_kit").click(function () {
    $("div.landing_container").hide();
    $("div.big_container").show();
    sideBars.hide();
    $("div.drum_kit_side_nav").show();
    display.hide();
    $("div.drum_kit_display").show();
})


//Side Bar Codes
$("p.headline").hover(function name(params) {
    $(this).css("cursor", "pointer");
})

const subTopics = $("div.sub_topics, div.sub_topics_01")
subTopics.hide();
$("div.topic_01").click(function () {
    //subTopics.hide();
    $("div.sub_topics_01").toggle();
})

subTopics.hide();
$("div.topic").click(function () {
    //subTopics.hide();
    $("div.sub_topics").toggle();
})

//Screen Resize
function checkWidth() {
  if (window.innerWidth < 600) {
        sideBars.hide();

        $("iframe").hover(function () {
            sideBars.hide();
        })

        $("div.sub_topics p, div.sub_topics_01 p").click(function () {
            sideBars.hide();
        })
    
        $("p.home").click(function () {
            sideBars.hide();
            $("button.topic_menu").hide();
        })

        $("p.theory").click(function () {
            sideBars.hide();
            $("button.topic_menu").show().click(function () {
                sideBars.hide();
                $("div.theory_side_nav").toggle();
            });
        })

        $("p.piano").click(function () {
            sideBars.hide();
            $("button.topic_menu").show().click(function () {
                sideBars.hide();
                $("div.piano_side_nav").toggle();
            });
        })

        $("p.violin").click(function () {
            sideBars.hide();
            $("button.topic_menu").show().click(function () {
                sideBars.hide();
                $("div.violin_side_nav").toggle();
            });
        })

        $("p.guitar").click(function () {
            sideBars.hide();
            $("button.topic_menu").show().click(function () {
                sideBars.hide();
                $("div.guitar_side_nav").toggle();
            });
        })

        $("p.voice").click(function () {
            sideBars.hide();
            $("button.topic_menu").show().click(function () {
                sideBars.hide();
                $("div.voice_side_nav").toggle();
            });
        })

        $("p.recorder").click(function () {
            sideBars.hide();
            $("button.topic_menu").show().click(function () {
                sideBars.hide();
                $("div.recorder_side_nav").toggle();
            });
        })

        $("p.drum_kit").click(function () {
            sideBars.hide();
            $("button.topic_menu").show().click(function () {
                sideBars.hide();
                $("div.drum_kit_side_nav").toggle();
            });
        })
  } else {
       
  }
}

// Run once when page loads
checkWidth();

// Run again automatically when window is resized
window.addEventListener('resize', checkWidth);