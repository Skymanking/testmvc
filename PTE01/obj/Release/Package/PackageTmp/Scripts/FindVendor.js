var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btnFindVendor').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var name = $('#tenvd').val();
            $.ajax({
                url: "/ProposalToBuy/FindVendor",
                data: { name: name },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    var lankanListArray = JSON.parse(response.status);
                    $("#abcd").find("option").remove();
                    $.each(lankanListArray, function (index, value) {
                        $("#abcd").append($("<option></option>").val(this.ID).html(this.Name));
                    });
                   

                }
            });
        });
    }
}
item.init();