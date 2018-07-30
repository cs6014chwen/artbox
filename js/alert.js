
$(document).ready(function () {
  var birthdayDate = $("#q_birthday input:text");
      imgSite = $("#q_site :selected");
      roomEC = $("#roomNumber input:text");
      food = $("#cocoEat input[name=coco]:checked");
  
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
      // $("#questionTwo").removeClass("show");
      // $("#questionOne").addClass("show");
      // birthdayDate.val("");
      // imgSite.val("");
    }
  });

  $("#roomNumber").submit(function () {
    var number = $("input:text", this).val();
    if (number == 727) {
      swal(
        '好棒!',
        '阿母加法算對了',
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
      // $("#questionThree").removeClass("show");
      // $("#questionOne").addClass("show");
      // birthdayDate.val("");
      // imgSite.val("");
      // roomEC.val("");
    }
  });

  $("#imgsLeo").submit(function () {
    var imgs = $('input[name="imgLeo"]:checkbox:checked').map(function () {
      return $(this).val();
    }).get().join(',');
    if (imgs == "1,3,5,6,7,9,12") {
      swal(
        '您真是太厲害了!',
        '全部算對囉!',
        'success'
      );
      $("#questionFour").removeClass("show");
      $("#questionFive").addClass("show");
    } else {
      swal(
        '不對喔!',
        '您大一是這些嗎?回第一個從看吧',
        'error'
      );
      // $("#questionFour").removeClass("show");
      // $("#questionOne").addClass("show");
      // birthdayDate.val("");
      // imgSite.val("");
      // roomEC.val("");
    }
  });
  
  $("#cocoEat").submit(function () {
    var number = $("input[name=coco]:checked", this).val();
    if (number == "pea") {
      swal(
        '恭喜!',
        '您果然關心兒子',
        'success'
      );
      $("#questionFive").removeClass("show");
      $("#questionSix").addClass("show");
    } else {
      swal(
        '小關不吃喔!',
        '小關在你背後看著你',
        'error'
      );
      // $("#questionFive").removeClass("show");
      // $("#questionOne").addClass("show");
      // birthdayDate.val("");
      // imgSite.val("");
      // roomEC.val("");
      // food.val("");
    }
  });
  $("#connection").submit(function () {
    var number = $("input:text", this).val();
    if (number == 9487) {
      swal(
        '您真是太厲害了!',
        '居然答對了',
        'success'
      );
      $("#questionSix").removeClass("show");
      $("#gameEnd").addClass("show");
    } else {
      swal(
        '不對喔!',
        '請把圖連起來看看',
        'error'
      );
      $("#questionSix").removeClass("show");
      $("#questionOne").addClass("show");
      birthdayDate.val("");
      imgSite.val("");
      roomEC.val("");
      food.val("");
    }
  });
  $("#gameEnd").submit(function () {
    var number = $("input:text", this).val();
    if (number == 125) {
      swal(
        '您真是太厲害了!',
        '快去開行李箱吧!',
        'success'
      );
      $("#questionSix").removeClass("show");
      $("#gameEnd").addClass("show");
    } else {
      swal(
        '不對喔!',
        '回去前面看看吧!',
        'error'
      );
      birthdayDate.val("");
      imgSite.val("");
      roomEC.val("");
      food.val("");
    }
  });
});