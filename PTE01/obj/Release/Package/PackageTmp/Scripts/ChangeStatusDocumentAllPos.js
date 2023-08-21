var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.change-all-status').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var docid = btn.data('docid');
            var stat = btn.data('stat');
            $.ajax({
                url: "/Document/ChangeStatusDocumentAllPos",
                data: { docid: docid, stat: stat },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                   
                }
            });
            window.location = window.location.href;
        });
    }
}
item.init();