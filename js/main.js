
//Kaybolan hoş geldiniz için fonksiyon

$(document).ready(
    function () {
      setTimeout(function () { $('#welcome').hide('slow'); }, 5000);
    }
  );

 
//sayfa yüklenmesi için oluşturulan fonsiyon 

$(window).load(function(){
  $('.loader').hide(); 
  $('.myPage').show(); 
  });

//Hakkımda kısmı için oluşturulan fonksiyon

  let i = 0;
  let txt = "    Merhaba, ben Oğulcan. Bana kısaca Can diye hitap edebilirsiniz. Araştıma yapmak ve yeni şeyler öğrenmeyi seviyorum. Hobi olarak başladığım bu yolculuğu mesleğim haline getirmeye çalışıyorum. HTML5, CSS3, Bootsrap, JavaScript, Ant Desing, Chakra UI, ReactJS gibi dil, kütüphaneler, API'ler ve araçlarla geliştirmeler yapıyorum. Şuan React ve Redux konularında kendimi geliştiriyorum. Frontend konusunda kendimi geliştirdikten sonra backend konularında kendimi geliştirmeye başlayacağım. Sizin de bu konular hakkında bana önerileriniz veya iş teklifleriniz varsa iletişime geçebilir, GitHub hesabımdan projelerimi inceleyebilirsiniz. Vakit ayırdığınız için teşekkür ederim. 😊";
  
  let speed = 24;
  
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("hakkımda").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }