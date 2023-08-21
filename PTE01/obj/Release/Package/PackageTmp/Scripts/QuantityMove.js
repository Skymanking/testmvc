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
                url: "/WarehouseTransaction/FindNameQRCode2",
                data: { name: name },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    var lankanListArray = JSON.parse(response.status);
                    if (lankanListArray == null) {
                        $("textarea[id=abc]").val("Mã QR vật tư không khớp");
                    } else {

                        $("textarea[id=abc]").val(lankanListArray.ItemId + ":" + lankanListArray.ItemName + ":" + lankanListArray.UnitId);
                        $("#btnAddVT").click();
                    }
                }
            });
        })
    }
};
item.init();
$(document).ready(function () {
    $("form").on('submit', function (e) {
        var start1 = $('#item_LimitedDate').val();
        var name = $('#name').val();
        if (count == 0 || start1 == "" || name == "") {
            alert("Chưa nhập đủ thông tin");
            return false;
        }
        else {
            return true;
        }
    });
    $("#refresh").click(function () {
        var qrcode = $('.qrcode2').val();

        $('.qrcode2').val(qrcode);
        //$('.qrcode2').text(qrcode);
    });
    $("#tenvt").change(function () {
        $("#btnFindVT").click();
    });

    var $myText = $("#tenvt");
    $myText.data("value", $myText.val());

    setInterval(function () {
        var data = $myText.data("value"),
            val = $myText.val();
        if (data != val) {
            $myText.data("value", val);
            //$("#btnFindVT").click();
        }
    }, 1000);


});
function openQRCamera2(node) {
    var reader = new FileReader();
    reader.onload = function () {
        node.value = "";
        qrcode.callback = function (res) {
            if (res instanceof Error) {
                alert("Không tìm thấy QR Code. Hãy thử lại và canh chỉnh camera nhìn rõ nét QR Code cần quét.");
            } else {
                node.parentNode.previousElementSibling.value = res;
                //$("#btnFindVT").click();
            }
        };
        qrcode.decode(reader.result);
    };
    reader.readAsDataURL(node.files[0]);
}
function openQRCamera(node) {
    var reader = new FileReader();
    reader.onload = function () {
        node.value = "";
        qrcode.callback = function (res) {
            if (res instanceof Error) {
                alert("Không tìm thấy QR Code. Hãy thử lại và canh chỉnh camera nhìn rõ nét QR Code cần quét.");
            } else {
                node.parentNode.previousElementSibling.value = res;
            }
        };
        qrcode.decode(reader.result);
    };
    reader.readAsDataURL(node.files[0]);
}