
var currentDayEl = $('#currentDay')
currentDayEl.text(dayjs().format('dddd, MMMM, DD')+ 'th')

var currenthour = dayjs().hour()
var timeblockEl = $(".time-block")
var hourEl = $('.hour')

for(var i = 9; i<= 17; i++){
  var savedNote = localStorage.getItem(`hour-${i}`);

  if(savedNote){
    $(`#hour-${i}`).children('textarea').val(savedNote)
  }
}


$.each(timeblockEl, function(){
  var timeblockhour = parseInt($(this).attr('id').split('hour-')[1]);

  if (timeblockhour < currenthour){
    $(this).addClass('past');
  } else if (timeblockhour > currenthour) {
    $(this).addClass('future');
  } else {
    $(this).addClass('present')
  }
})

$.each(timeblockEl, function(){
  $(this).on('click', '.btn', function(){
    localStorage.setItem($(this).parent().attr('id'),$(this).parent().children('textarea').val() )
  })
})

$('header').css({"text-align": "center"});
$("#currentDay").css({'font-size': "40px"})



