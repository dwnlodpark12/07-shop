$(".navi-wrap > .navi").mouseenter(onEnter);
$(".navi-wrap > .navi").mouseleave(onLeave);
function onEnter() {
$("sub-wrap").hide();
$(this).find("sub-wrap").show();
}
function onLeave() {

}