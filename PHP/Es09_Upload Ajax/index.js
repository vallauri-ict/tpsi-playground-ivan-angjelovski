"use strict"

$(document).ready(function() {
    $("#btnInvia").on("click", function() {
        let txtFiles = $("#txtFiles");
        let txtUser = $("#txtUser");
        let chkOverwrite = $("#chkOverwrite");
        
        let formData = new FormData();
        formData.append("txtUser", txtUser.val());
        if(chkOverwrite.is(":checked")) {
            formData.append("chkOverwrite", true);
        }

        let files = txtFiles.prop("files");

        for (let file of files) {
            formData.append("txtFiles[]", file);
        }

        let request = inviaRichiestaMultipart("post", "upload.php", formData);
        request.fail(errore);
        request.done(function(data){
            console.log(data);
            $("#risultato").html(data);
        });
    });
});