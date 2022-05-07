//Jquery
$(document).ready(function() {
    $(".updown").click(function() {
        $("html, body").animate({
            scrollTop: $(".step-2").offset().top
        }, 1000);
    });
});

//ScrollMagic

let controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({triggerElement: ".topnav"})
.setClassToggle(".topnav", "show")
.addTo(controller);

new ScrollMagic.Scene({triggerElement: ".step-1-info"})
.setClassToggle(".step-1-info", "show")
.addTo(controller);

new ScrollMagic.Scene({triggerElement: ".step-2-info"})
.setClassToggle(".step-2-info", "show")
.addTo(controller);

new ScrollMagic.Scene({triggerElement: ".step-3-header"})
.setClassToggle(".step-3-header", "show")
.addTo(controller);

new ScrollMagic.Scene({triggerElement: ".box1"})
.setClassToggle(".box1", "show")
.addTo(controller);

new ScrollMagic.Scene({triggerElement: ".box2"})
.setClassToggle(".box2", "show")
.addTo(controller);

new ScrollMagic.Scene({triggerElement: ".box3"})
.setClassToggle(".box3", "show")
.addTo(controller);

new ScrollMagic.Scene({triggerElement: ".step-4-img-1"})
.setClassToggle(".step-4-img-1", "show")
.addTo(controller);

new ScrollMagic.Scene({triggerElement: ".step-4-header"})
.setClassToggle(".step-4-header", "show")
.addTo(controller);

new ScrollMagic.Scene({triggerElement: ".img4"})
.setClassToggle(".img4", "show")
.addTo(controller);

new ScrollMagic.Scene({triggerElement: ".text4"})
.setClassToggle(".text4", "show")
.addTo(controller);

new ScrollMagic.Scene({triggerElement: ".step-5-header"})
.setClassToggle(".step-5-header", "show")
.addTo(controller);

new ScrollMagic.Scene({triggerElement: ".input1"})
.setClassToggle(".input1", "show")
.addTo(controller)

new ScrollMagic.Scene({triggerElement: ".input1"})
.setClassToggle(".input2", "show")
.addTo(controller)

new ScrollMagic.Scene({triggerElement: ".input1"})
.setClassToggle(".input3", "show")
.addTo(controller)