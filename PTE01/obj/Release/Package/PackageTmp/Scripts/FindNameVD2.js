var Vendor = {
    init: function () {
        Vendor.registerEvents();
    },
    registerEvents: function () {
        $('.btnFindVD').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var name = $('#tenvd').val();
            $.ajax({
                url: "/ProposalToBuy/FindNameVD",
                data: { name: name },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    var lankanListArray = JSON.parse(response.status);
                    $("#vendorid").find("option").remove();
                    $.each(lankanListArray, function (index, value) {
                        $("#vendorid").append($("<option></option>").val(this.ID).html(this.Name));
                    });
                   

                }
            });
        });
    }
}
Vendor.init();