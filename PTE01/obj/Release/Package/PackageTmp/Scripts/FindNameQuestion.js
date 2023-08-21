var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btnFindName').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var name = $('#tenvt').val();
            $.ajax({
                url: "/TestQuestion/FindNameQ",
                data: { name: name },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    var lankanListArray = JSON.parse(response.status);
                    $("#abc").find("option").remove();
                    $.each(lankanListArray, function (index, value) {
                        $("#abc").append($("<option></option>").val(this.ID).html(this.Name ));
                    });
                    $("#abc").append($("<option></option>").val("NULL").html("không có câu hỏi nào được tìm thấy"));

                }
            });
        });
    }
}
item.init();