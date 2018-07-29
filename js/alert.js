$(document).ready(function () {
  var all_Inputs = $("input[type=textbox]");
  
  $("#q_birthday").submit(function(){
    var date = $("input:text", this).val();
    if (date == "0805") {
      swal(
        'Good job!',
        'You clicked the button!',
        'success'
      );
      $("#questionOne").removeClass("show");
      $("#questionTwo").addClass("show");
    } else{
      swal(
        '哈哈哈哈',
        '打錯囉!',
        'error'
      );
      $("input:text", this).val("");
    }
  });

  $("#q_site").submit(function () {
    var site = $(":selected", this).val();
    if (site == 5) {
      swal(
        'Good job!',
        'You clicked the button!',
        'success'
      );
      $("#questionTwo").removeClass("show");
      $("#questionThree").addClass("show");
    } else {
      swal(
        '哈哈哈哈',
        '從第一個開始喔',
        'error'
      );
      $("#questionTwo").removeClass("show");
      $("#questionOne").addClass("show");
      all_Inputs.val("");
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
      all_Inputs.val("");
    }
  });
  
});