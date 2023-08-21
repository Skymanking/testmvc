var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btn-approval').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var id = btn.data('id');
            $.ajax({
                url: "/WarehouseTransaction/Approval",
                data: { id: id },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        btn.html("<span class='fa fa-check fa-2x' style='font-size:80px;border: 4px solid black;'></span>");
         
                        window.location = '/WarehouseTransaction/Edit/' + id;
                    }
                    else {
                        btn.html("<span class='fa fa-times fa-2x' style='color:red;font-size:80px;border: 4px solid black;'></span>");
                    }
                }
            });
        });
    }
}
item.init();