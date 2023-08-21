var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.change-status').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var docid = btn.data('docid');
            var posid = btn.data('posid');
            $.ajax({
                url: "/Document/ChangeStatusDocumentPos",
                data: { docid: docid, posid: posid },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        btn.html("<i class='fa fa-graduation-cap fa-2x' style='color:#28a745'></i>");
                    }
                    else {
                        btn.html("<i class='fa fa-graduation-cap fa-2x' style='color:#dc3545'></i>");
                    }
                }
            });
        });
    }
}
item.init();