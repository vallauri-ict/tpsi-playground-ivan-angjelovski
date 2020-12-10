const DIM = 9;

$(document).ready(function() {
  let wrapper = $("#wrapper");
  let tooltip = $("#tooltip");
  let button = $("#btnOk");
  let txtPosizione = $("#txtPosizione");
  let txtColore = $("#txtColore");
  let lblMsg = $("#lblMsg");

  tooltip.hide();

  wrapper.css({"background-color": "#FF9", 
               "float": "left"});
  
  for (let i = 0; i < DIM; i++) {
    let grey = generaNumero(0, 255);
    let newDiv = $("<div>");
    newDiv.prop("class", "box").css({"background-color": `rgb(${grey}, ${grey}, ${grey})`, "color": "#f00"}).appendTo(wrapper);
    newDiv.text(i + 1);
  };

  wrapper.children("div").on("mouseover", function() {
    tooltip.text($(this).css("background-color"));
    let div = $(this);
    tooltip.fadeIn(1000, function() {
      tooltip.show();
      console.log(div.text());
      
    });
    wrapper.children("div").not(":nth-of-type(" + div.text() + ")").animate(({ opacity: 0 }), 1000);
  });

  wrapper.children("div").on("mouseout", function(){
    let div = $(this);
    tooltip.fadeOut(1000, function() {
      tooltip.hide();
    });
    wrapper.children("div").not(":nth-of-type(" + div.text() + ")").animate(({ opacity: 1 }), 1000);
  });

  button.on("click", function() {
    if(controlValues()) {
      let chosenDivColor = parseInt(wrapper.children("div").eq(txtPosizione.val() - 1).css("background-color").substr(4, 3));
      let chosenColor = parseInt(txtColore.val());
      if(chosenDivColor > chosenColor) {
        lblMsg.text("Troppo piccolo");
        txtColore.css({"background-color": "#f00", "color": "#fff"});
      } else if (chosenDivColor < chosenColor) {
        lblMsg.text("Troppo grande");
        txtColore.css({"background-color": "#00f", "color": "#fff"});
      } else {
        lblMsg.text("BRAVO");
        txtColore.css({"background-color": "#FF9", "color": "#000"});
      };
    };
    
  });

  function controlValues() {
    if(txtPosizione.val() == "" || parseInt(txtPosizione.val()) > 9) {
      alert("Posizione non valida");
      txtPosizione.css("border", "1px solid #f00");
      return false;
    } else {
      txtPosizione.css("border", "1px solid #000");
    };
    if(txtColore.val() == "") {
      alert("Inserisci il numero della tonalità di grigio con cui vuoi provare");
      txtColore.css("border", "1px solid #f00");
      return false;
    } else {
      txtColore.css("border", "1px solid #000");  
    };
    return true;
  };

  function generaNumero(min, max){
    return Math.floor((max - min + 1) * Math.random() + min);
  };
});