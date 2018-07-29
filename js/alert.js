
$(document).ready(function () {
  var birthdayDate = $("#q_birthday input:text");
      imgSite = $("#q_site :selected");
  
  $("#q_birthday").submit(function(){
    var date = $("input:text", this).val();
    if (date == "0805") {
      swal(
        '好棒!',
        '你答出來了耶!',
        'success'
      );
      $("#questionOne").removeClass("show");
      $("#questionTwo").addClass("show");
    } else{
      swal(
        '哈哈哈哈',
        '你不知道你的生日嗎?',
        'error'
      );
      birthdayDate.val("");
    }
  });

  $("#q_site").submit(function () {
    var site = $(":selected", this).val();
    if (site == 5) {
      swal(
        '好棒!',
        '你居然記得耶!',
        'success'
      );
      $("#questionTwo").removeClass("show");
      $("#questionThree").addClass("show");
    } else {
      swal(
        '嘿嘿嘿',
        '睡太多不記得了嗎?',
        'error'
      );
      $("#questionTwo").removeClass("show");
      $("#questionOne").addClass("show");
      birthdayDate.val("");
      imgSire.val("");
    }
  });

  $("#chun").submit(function () {
    var chunText = $("input:text", this).val();
    if (chunText == "哈哈哈哈") {
      swal(
        'Good job!',
        'You clicked the button!',
        'success'
      );
      $("#questionThree").removeClass("show");
      $("#questionFour").addClass("show");
    } else {
      swal(
        '哈哈哈哈',
        '回第一個吧',
        'error'
      );
      $("#questionThree").removeClass("show");
      $("#questionOne").addClass("show");
      birthdayDate.val("");
      imgSire.val("");
    }
  });
  
});