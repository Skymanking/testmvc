var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btn-cancel').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var id = btn.data('id');
            var chude = btn.data('chude');
            var noidung = btn.data('noidung');
            var nguoithuchien = btn.data('nguoithuchien');
            var hanchot = btn.data('hanchot');
            $.ajax({
                url: "/Meeting/CreateBBH",
                data: { id: id, chude: chude, noidung: noidung, nguoithuchien: nguoithuchien, hanchot: hanchot },
                dataType: "text",
                type: "POST",
                success: function (response) {

       
                }
            });
            window.location = '/Meeting/Edit/' + id;
            
        });
    }
}
item.init();