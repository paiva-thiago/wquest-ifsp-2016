$(document).ready(function(){
    function ctr(quem){
      var windowHeight = $(window).height();
      var windowWidth = $(window).width();
      var boxHeight = $(quem).height();
      var boxWidth = $(quem).width();
      var posicao = $(document).scrollTop();
      $(quem).css({'left' : ((windowWidth - boxWidth)/2), 'top' : ((windowHeight - boxHeight)/2)+posicao});
    }
    $(".dashboard-button").click(function(){
       var item = $(this).attr("id").split("btn-").join("");
       console.log(item);
        $.ajax({
			          type: "POST",
			          url: "conteudo/postino.php",
                data:"remetente="+item,
			          success: function(data){
                    var res=$.parseJSON(data);
                    $("#h3Mdl").html(res.cabec);
                    $("#txtMdl").html(res.conte);
			             }
		    });
      //var topo = $(document).scrollTop().valueOf()+30;

      //$("#mdl").css({"top":topo});
      ctr("#mdl");
      $("section").foggy();
      $("header").foggy({blurRadius: 20,opacity: 0.4,cssFilterSupport: true });
      $("#mdl").slideDown();
    });
    $("#fchMdl").click(function(){
      $("section").foggy(false);
      $("header").foggy(false);
      $("#mdl").slideUp();
      $("#h3Mdl").html("");
      $("#txtMdl").html("");
    })
});
