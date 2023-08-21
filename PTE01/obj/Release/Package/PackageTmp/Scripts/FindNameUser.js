var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btnFindUser').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var name = $('#tenuser').val();
            $.ajax({
                url: "/User_maintenance/FindNameVTUser",
                data: { name: name},
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    var lankanListArray = JSON.parse(response.status);
                    $("#abcde").find("option").remove();
                    $.each(lankanListArray, function (index, value) {
                        $("#abcde").append($("<option></option>").val(this.ID).html(this.Name + " :" + this.ID));
                    });
                  

                }
            });
        });
    }
}
item.init();