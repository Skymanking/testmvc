var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btnFindDevice').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var name = $('#tendv').val();
            $.ajax({
                url: "/Mainternance_List/FindNameVTDevice1",
                data: { name: name},
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    var lankanListArray = JSON.parse(response.status);
                    $("#abcd").find("option").remove();
                    $("#abcde").find("option").remove();
                    $.each(lankanListArray, function (index, value) {
                        $("#abcd").append($("<option></option>").val(this.MaterialCode).html(this.Name + " :" + "[" + this.ID + "]"));
                        $("#abcde").append($("<option></option>").val(this.ID).html(this.Name + " :" + this.ID));
                    });
                  

                }
            });
        });
    }
}
item.init();