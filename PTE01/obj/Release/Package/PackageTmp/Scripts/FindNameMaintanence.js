var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btnFindmain').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var name = $('#tenvt').val();
            $.ajax({
                url: "/Mainternance_Category/FindNameVTMaintenanceList",
                data: { name: name},
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    var lankanListArray = JSON.parse(response.status);
                    $("#abc").find("option").remove();
                    $.each(lankanListArray, function (index, value) {
                        $("#abc").append($("<option></option>").val(this.MaterialCode).html(this.Name + " [" + this.Cycle + " tháng]"));
                    });
                  

                }
            });
        });
    }
}
item.init();