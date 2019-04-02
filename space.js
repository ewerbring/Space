


$('#smallest').click(function() {
    $('.spacecrafts0').hide();
   $('.spacecrafts1').show();
   $('.spacecrafts2').hide();
   $('.spacecrafts3').hide();
   $('#smallest').addClass('underline');
   $('#medium').removeClass('underline');
   $('#large').removeClass('underline');
   $('.header2').addClass('ye');
   $('.header2').removeClass('bl');
   $('.header2').removeClass('ma');
});

$('.earth').click(function() {
    $('.spacecrafts0').hide();
   $('.spacecrafts1').show();
   $('.spacecrafts2').hide();
   $('.spacecrafts3').hide();
$(".pbd").animate({opacity: 0},500);
  $('#smallest').addClass('underline');
   $('#medium').removeClass('underline');
   $('#large').removeClass('underline');
   $('.header2').addClass('ye');
   $('.header2').removeClass('bl');
   $('.header2').removeClass('ma');

});

$('#medium').click(function() {
    $('.spacecrafts0').hide();
   $('.spacecrafts2').show();
   $('.spacecrafts1').hide();
   $('.spacecrafts3').hide();
   $('#medium').addClass('underline');
   $('#smallest').removeClass('underline');
   $('#large').removeClass('underline');
   $('.header2').addClass('bl');
   $('.header2').removeClass('ye');
   $('.header2').removeClass('ma');
});

$('#large').click(function() {
    $('.spacecrafts0').hide();
   $('.spacecrafts3').show();
   $('.spacecrafts1').hide();
   $('.spacecrafts2').hide();
   $('#large').addClass('underline');
   $('#medium').removeClass('underline');
   $('#smallest').removeClass('underline');
   $('.header2').addClass('ma');
   $('.header2').removeClass('bl');
   $('.header2').removeClass('ye');
});


$('.earth').click(function() {
   $('.firststep').show();
   $('.spacecrafts1').show();
});



$('.p2').click(function() {
   $('.v1gif').show();
});

$('.background').click(function() {
   $('.v1gif').hide();
});

// $('.earth').click(function() {
//    $('.p1, .p2, .v1, .v2, .vd1').show(80);
// });



////\\

///WORK HERE THIS WAS A BUTTONTEST






$(".earth").click(function(){
  $(".earthbox").animate({"width":"25vw",left: "37.5vw",top: "25vh"},1500);
  $(".p2").animate({"width":"3vw" ,left: "47.5vw",top: "28vh"},1500);
  $(".p1").animate({"width":"4vw" ,left: "38.5vw",top: "44vh"},1500);
  $(".v1").animate({"width":"3vw" ,left: "42.5vw",top: "62vh"},1500);
  $(".v2").animate({"width":"6vw" ,left: "51.5vw",top: "60vh"},1500);
  $(".vd1").animate({"width":"2vw" ,left: "56.5vw",top: "40vh"},1500);
});



$("#smallest").click(function(){
  $(".earthbox").animate({"width":"25vw",left: "37.5vw",top: "25vh"},1500);
  $(".p2").animate({"width":"3vw" ,left: "47.5vw",top: "28vh"},1500);
  $(".p1").animate({"width":"4vw" ,left: "38.5vw",top: "44vh"},1500);
  $(".v1").animate({"width":"3vw" ,left: "42.5vw",top: "62vh"},1500);
  $(".v2").animate({"width":"6vw" ,left: "51.5vw",top: "60vh"},1500);
  $(".vd1").animate({"width":"2vw" ,left: "56.5vw",top: "40vh"},1500);
  $('.background').removeClass("mediumb largeb");
  $('.background').toggleClass("smallestb");
});


$("#medium").click(function(){
  $(".earthbox").animate({"width":"16vw" ,left: "42vw",top: "36vh"},1500);
  $(".p2").animate({"width":"5vw" ,left: "64vw",top: "29vh"},1500);
  $(".p1").animate({"width":"4vw" ,left: "67vw",top: "47vh"},1500);
  $(".v1").animate({"width":"3vw" ,left: "47vw",top: "77vh"},1500);
  $(".v2").animate({"width":"6vw" ,left: "31vw",top: "55vh"},1500);
  $(".vd1").animate({"width":"3vw" ,left: "57vw",top: "62vh"},1500);
  $('.background').removeClass("smallestb largeb");
  $('.background').toggleClass("mediumb");
});

$("#large").click(function(){
  $(".earthbox").animate({"width":"3vw",left: "47vw",top: "48.5vh"},1500);
  $(".p2").animate({"width":"2vw" ,left: "32vw",top: "67vh"},1500);
  $(".p1").animate({"width":"4vw" ,left: "91vw",top: "7vh"},1500);
  $(".v1").animate({"width":"5vw" ,left: "87vw",top: "47vh"},1500);
  $(".v2").animate({"width":"12vw" ,left: "57vw",top: "57vh"},1500);
  $(".vd1").animate({"width":"8vw" ,left: "87vw",top: "82vh"},1500);
  $('.background').removeClass("mediumb smallestb");
  $('.background').toggleClass("largeb");
});







$('.buttonopen').click(function() {
   $('.buttonclose').show();
});

$('.buttonopen').click(function() {
   $('.buttonopen').hide();
});

$('.buttonopen').click(function() {
   $('.buttonclose').show();
});




$('.buttonclose').click(function() {
   $('.buttonopen').show();
});

$('.buttonclose').click(function() {
   $('.buttonclose, #info').hide();
});






///infolayer

$(document).mouseup(function (e)
{
    var container = new Array();
    container.push($('#item_1'));
    container.push($('#item_2'));

    $.each(container, function(key, value) {
        if (!$(value).is(e.target) // if the target of the click isn't the container...
            && $(value).has(e.target).length === 0) // ... nor a descendant of the container
        {
            $(value).hide();
        }
    });
});






////drag

function handle_mousedown(e){
    window.my_dragging = {};
    my_dragging.pageX0 = e.pageX;
    my_dragging.pageY0 = e.pageY;
    my_dragging.elem = this;
    my_dragging.offset0 = $(this).offset();
    function handle_dragging(e){
        var left = my_dragging.offset0.left + (e.pageX - my_dragging.pageX0);
        var top = my_dragging.offset0.top + (e.pageY - my_dragging.pageY0);
        $(my_dragging.elem)
        .offset({top: top, left: left});
    }
    function handle_mouseup(e){
        $('body')
        .off('mousemove', handle_dragging)
        .off('mouseup', handle_mouseup);
    }
    $('body')
    .on('mouseup', handle_mouseup)
    .on('mousemove', handle_dragging);
}
$('.').mousedown(handle_mousedown);

$('.resumetext').mousedown(handle_mousedown);
$('.schooltext').mousedown(handle_mousedown);
