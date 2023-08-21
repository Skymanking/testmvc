var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btnFindVT').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var name = $('#tenvt').val();
            $.ajax({
                url: "/ProposalToBuy/FindNameVT",
                data: { name:name },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    var lankanListArray = JSON.parse(response.status);
                    $("#itemid").find("option").remove();
                    $.each(lankanListArray, function (index, value) {
                        $("#itemid").append($("<option></option>").val(this.ItemId).html(this.ItemName+"("+this.UnitId+")"));
                    });
                   

                }
            });
        });
    }
}
item.init();