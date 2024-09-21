$(document).ready(function() {
    // Handle checkbox state change
    $("#messageState").on("change", function() {
        $(".message").removeClass("openNor closeNor");
        if ($("#messageState").is(":checked")) {
            $(".message").removeClass("closed no-anim").addClass("openNor");
            $(".heart").removeClass("closeHer openedHer").addClass("openHer");
            if (!$(".container").hasClass("permanent-bg")) { // Only change if background isn't permanently set
                $(".container").css("transition", "background-color 2s").css("background-color", "#f48fb1");  // Background when checked
            }
            console.log("Opening");
        } else {
            $(".message").removeClass("no-anim").addClass("closeNor");
            $(".heart").removeClass("openHer openedHer").addClass("closeHer");
            if (!$(".container").hasClass("permanent-bg")) { // Only change if background isn't permanently set
                $(".container").css("transition", "background-color 2s").css("background-color", "#fce4ec");  // Background when unchecked
            }
            console.log("Closing");
        }
    });

    // Detect animation end on the message
    $(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
        console.log("Animation End");
        if ($(".message").hasClass("closeNor")) {
            $(".message").addClass("closed");
        }
        $(".message").removeClass("openNor closeNor").addClass("no-anim");
    });

    // Detect animation end on the heart
    $(".heart").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
        console.log("Animation End");
        if (!$(".heart").hasClass("closeHer")) {
            $(".heart").addClass("openedHer beating");
        } else {
            $(".heart").addClass("no-anim").removeClass("beating");
        }
        $(".heart").removeClass("openHer closeHer");
    });

    // Add the click event for the heart to change background to #850101
    $(".heart").on("click", function() {
        $(".container").css("background-color", "#850101").addClass("permanent-bg"); // Set the background color and make it permanent
        console.log("Heart clicked, background changed to #850101 permanently");
    });
});