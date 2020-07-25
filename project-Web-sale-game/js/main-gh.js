   $(document).ready(function() {
 
            $(".button-plus").click(function(){
                 let counter = parseInt($("#hiddenVal").val());
                counter++;
                $("#hiddenVal").val(counter);
                $("#theCount").text(counter);
            });

            $(".button-minus").click(function(){
                let counter = parseInt($("#hiddenVal").val());
                counter--;
                $("#hiddenVal").val(counter);
                $("#theCount").text(counter);
            });


            $(".button-plus-2").click(function(){
                 let counter = parseInt($("#hiddenVal-2").val());
                counter++;
                $("#hiddenVal-2").val(counter);
                $("#theCount-2").text(counter);
            });

            $(".button-minus-2").click(function(){
                let counter = parseInt($("#hiddenVal-2").val());
                counter--;
                $("#hiddenVal-2").val(counter);
                $("#theCount-2").text(counter);
            });


            $("#remove").click(function() {
            	$('.box-gh-1').remove('.box-gh-1')
            });

            let canna = $("#remove-2").click(function() {
            	$('.box-gh-2').remove('.box-gh-2')
            });
            console.log(canna)

        });



    let name = $('#name');
let pass = $('#pass');
let repass = $('#repass')
$('#infor-dk').on('click', function() {
        let flag = true
        if ( name.val().trim() == '') {
            name.next('span').text('Vui lòng nhập Tài khoản')
            flag =  false
        } else {
            name.next('span').text('')
        }

        if ( pass.val().trim() == '') {
            pass.next('span').text('Vui lòng nhập Mật khẩu')
            flag =  false
        } else {
            pass.next('span').text('')
        }

        if ( repass.val().trim() == '' || repass.val() !== pass.val()) {
            repass.next('span').text('Nhập lại mật khẩu chưa đúng hoặc chưa nhập')
            flag =  false
        } else {
            repass.next('span').text('')
        }
        return flag
});

let nametk = $('#name-tk');
let passtk = $('#pass-tk');
$('#infor-dn').on('click', function() {
        let flag = true
        if ( nametk.val().trim() == '') {
            nametk.next('span').text('Vui lòng nhập Tài khoản')
            flag =  false
        } else {
            nametk.next('span').text('')
        }

        if ( passtk.val().trim() == '') {
            passtk.next('span').text('Vui lòng nhập Mật khẩu')
            flag =  false
        } else {
            passtk.next('span').text('')
        }
        return flag
});


function openModalSignin() {
    $('#exampleModalCenter').modal('show')
        $('#pills-sign-in-tab').tab('show')
 }

 function openModalRegister() {
    $('#exampleModalCenter').modal('show')
        $('#pills-register-tab').tab('show')
 }


$('#btn-send-email').click(function(event) {
    alert("Chúng tôi đã nhận được địa chỉ Email của bạn - Tin tức sẽ sớm gửi đến bạn")
});


mybutton = document.querySelector(".btn-top");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}


