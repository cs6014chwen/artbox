
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
      $("#questionTwo").removeClass("show");
      $("#questionOne").addClass("show");
      birthdayDate.val("");
      imgSite.val("");
    }
  });

  $("#roomNumber").submit(function () {
    var number = $("input:text", this).val();
    if (number == 727) {
      swal(
        '好棒!',
        '你有去找洢浠的噗浪嗎?其實最多也只有六種組合',
        'success'
      );
      $("#questionThree").removeClass("show");
      $("#questionFour").addClass("show");
    } else {
      swal(
        '告訴你一個方法',
        '去找洢浠的噗浪,某年阿殘的生日賀圖',
        'error'
      );
      $("#questionThree").removeClass("show");
      $("#questionOne").addClass("show");
      birthdayDate.val("");
      imgSite.val("");
      roomEC.val("");
    }
  });

  $("#imgsLeo").submit(function () {
    var imgs = $('input[name="imgLeo"]:checkbox:checked').map(function () {
      return $(this).val();
    }).get().join(',');
    if (imgs == "1,3,5,6,7,9,12") {
      swal(
        '原來您還記得!',
        '好棒棒喔!',
        'success'
      );
      $("#questionFour").removeClass("show");
      $("#questionFive").addClass("show");
    } else {
      swal(
        '不對喔!',
        '您真的不知道嗎?去找相關人士求救吧!',
        'error'
      );
      $("#questionFour").removeClass("show");
      $("#questionOne").addClass("show");
      birthdayDate.val("");
      imgSite.val("");
      roomEC.val("");
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
        '懲罰你回第一題',
        'error'
      );
      $("#questionFive").removeClass("show");
      $("#questionOne").addClass("show");
      birthdayDate.val("");
      imgSite.val("");
      roomEC.val("");
      food.val("");
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
    if (number == 123) {
      swal(
        '您真是太厲害了!',
        '快去開行李箱吧!',
        'success'
      );
    } else if (number == 635){
      swal(
        '哈哈哈',
        '你居然相信小關!',
        'error'
      );
    } else if (number == 277) {
      swal(
        '哈哈哈',
        '吋存從頭到尾都說謊阿',
        'error'
      );
    } else {
      swal(
        '不對喔!',
        '回去前面看看吧!',
        'error'
      );
    }
  });
});