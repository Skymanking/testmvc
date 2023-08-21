var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.btn-saveitem').off('click').on('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var equipment = btn.data('equipment');
            var equipid = btn.data('equipid');
            var equipid2 = btn.data('equipid2');
            var request = btn.data('request');
            var parameter = btn.data('parameter');
            var result = btn.data('result');
            var note = btn.data('note');

            $.ajax({
                url: "/Checklist/CreateChecklistItem",
                data: { equipment: equipment, equipid: equipid, equipid2: equipid2, request: request, parameter: parameter, result: result, note: note },
                dataType: "text",
                type: "POST",
                success: function (response) {
                    console.log(response);
                  
                        btn.html("<span class='fa fa-check fa-2x'></span>đã lưu");
                    
                       
                        btn.removeClass('btn-saveitem');
                        setTimeout(function () {
                            //alert("đã lưu thành công");
                            btn.hide();
                        }, 1000); //delay is in milliseconds 
                }
            });          

        });
    }
}
item.init();
