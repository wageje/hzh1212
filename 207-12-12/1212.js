$(document).ready(function() {
    var pid=$('.pid');
    $(pid).each(function(n){
         var spp1=$(pid[n]).find('.spp1').html();
         $(pid[n]).children('img').attr('src','img/'+spp1+'.jpg');
         $(pid[n]).attr('href','http://www.cnhzh.com/ProductChannel.aspx?pid='+spp1);
    })    
});
$(function() {
   borderJM = function () {
    $('#JM').css('color','red');   
    setTimeout(function () {
      $('#JM').css('color','orange');
      $('#JMD').css('width','150px');
      $('#JM').css('-webkit-animation-name','GrowQuare1');
    }, 700);
    setTimeout(function () {
      $('#JM').css('color','#FFFFE0');
    }, 1400);    
    setTimeout(function () {
      $('#JM').css('color','#fff');
      $('#JM').css('-webkit-animation-name','GrowQuare');        
    }, 2100);    
  }

   borderYA = function () {
    $('#YA').css('color','red');  
    setTimeout(function () {
      $('#YA').css('color','orange');
      $('#YAD').css('width','150px');
      $('#YA').css('-webkit-animation-name','GrowQuare2');
    }, 700);
    setTimeout(function () {
      $('#YA').css('color','#FFFFE0');
    }, 1400);    
    setTimeout(function () {
      $('#YA').css('color','#fff');
      $('#JM').css('-webkit-animation-name','GrowQuare'); 
    }, 2100);    
  }

  // 登陆
  var windowHeight = screen.height;
  var windowWidth = document.body.clientWidth;
  $('.login-div').css('left',windowWidth/2-160)
                  .css('top',windowHeight/2-250);
  if($.cookie('login') != 1){
    $('.login-zhe').css('display','inline-block');
     $('.login-div').css('display','inline-block');
    var x = 3;
    var sst;
    var st = function () {
        x--;
        console.log(x);
        $('.login-span').html(x);  
        clearTimeout(sst);
        if(x > 0){
          sst = setTimeout(st,1000);
        }else if(x <= 0){
          clearTimeout(sst);
          window.location.replace("http://www.cnhzh.com/Login.aspx?ReturnUrl=http%3a%2f%2fwww.cnhzh.com%2fMemberCenter.aspx");
        }  
    }
    sst = setTimeout(st,1000);
  }

})
if (navigator.appName === 'Microsoft Internet Explorer') { //判断是否是IE浏览器
　if (navigator.userAgent.match(/Trident/i) && navigator.userAgent.match(/MSIE 8.0/i)) { //判断浏览器内核是否为Trident内核IE8.0
        $('.container').css('width','1200px').css('margin','0 auto');
        $('.pin-ul').addClass('ie8-pin');
        $('.right-div').addClass('ie8-right-div');
        $('.col-md-8').css('width','0').css('display','none');
        $('.col-md-6').css('width','50%').css('float','left');
        $('.col-md-3').css('width','24.5%');
        $('.col-md-4').css('width','33.3%').css('float','left');

　　  }
}