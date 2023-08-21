var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btndeletetool').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var id = btn.data('id');
            $.ajax({
                url: "/Personal/DeleteTool",
                data: { id: id },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    //if (response.status == true) {
                    //    $('.modal-backdrop').remove();
                    //    $('#deletetoolModal').hide();
                    //    $('#rowtool_' + id).hide(); 
                    //    id = null;
                    //}
                    //else {
                    //    btn.html("<span>không xóa được</span>");
                    //}
                }

            });
            window.location.reload();
        });
    }
}
item.init();