var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btnFindVTFAST').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var name = $('#tenvt').val();
            $.ajax({
                url: "/ProposalToBuy/FindNameVTFAST",
                data: { name:name },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    var lankanListArray = JSON.parse(response.status);
                    $("#abc").find("option").remove();
                    $.each(lankanListArray, function (index, value) {
                        $("#abc").append($("<option></option>").val(this.ma_vt).html(this.ten_vt+"("+this.dvt+")"));
                    });
                  

                }
            });
        });
    }
}
item.init();