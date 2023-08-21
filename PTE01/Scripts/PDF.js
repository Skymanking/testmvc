var complete = 0;
var numPages = 0;
$(document).ready(function () {
    while (true) {
        if (complete == numPages && numPages != 0) {
            LoadSign();
            break;
        }
    }
});
function InsertPDF() {
    var id = document.getElementById("IDPDF").value;
    $.ajax({
        url: "/PDF/InsertSignatureIntoPDF",
        data: { IDPdf: id },
        dataType: "text",
        type: "POST",
        success: function (response) {
            if (response == "True") {
                alert("Thành công");
            }
            else {
                alert("Không thành công");
            }
        }
    });
}

function Delete() {
    var id = document.getElementById("IDTarget").value;
    document.getElementById(id.substring(1)).remove();
    $.ajax({
        url: "/PDF/DelSign",
        data: { id: Number(id.split("_")[1]) },
        dataType: "text",
        type: "POST",
        success: function (response) {
        }
    });

}
function ChangeSign() {
    var ID = document.getElementById("IDTarget").value;
    document.getElementById(ID.substring(1)).setAttribute("data-sign", document.getElementById("slSign").value);
    document.getElementById("IDEmpOld").value = document.getElementById("slSign").value;

}
function ReSize(type) {
    var resize = $("#selectorContainer").width() / 20;
    var ID = document.getElementById("IDTarget").value;
    if (ID == "") {
        alert("Chưa chọn");
    }
    else {
        var width = document.getElementById(ID).offsetWidth;
        if (type == 0) {
            width -= resize;
        }
        else {
            width += resize;
        }
        document.getElementById(ID).width = width;
    }
}
function Target() {
    document.getElementById("property").style.display = "";
    var IDEmpSign = "";
    var status = document.getElementById(event.target.id.substring(1)).getAttribute('data-status');
    if (status == 1) {
        $("#slSign").select2({ disabled: 'readonly' });
        document.getElementById("toolsign").style.display = "none";
    }
    else {
        $("#slSign").select2({ disabled: '' });
        document.getElementById("toolsign").style.display = "";
    }
    if (event.target.id.charAt(0) == "I") {
        document.getElementById("IDTarget").value = event.target.id;
        IDEmpSign = document.getElementById(event.target.id.substring(1)).getAttribute('data-sign');
    }
    else {
        document.getElementById("IDTarget").value = "I" + event.target.id;
        IDEmpSign = document.getElementById(event.target.id).getAttribute('data-sign');
    }
    $('#slSign').val(IDEmpSign);
    $('#slSign').trigger('change');
}
function LoadSign() {
    var id = document.getElementById("IDPDF").value;
    $.ajax({
        url: "/PDF/GetApprove",
        data: { idPdf: id },
        dataType: "json",
        type: "POST",
        success: function (response) {
            $.each(response.list, function (index, value) {
                var Postop = value.PosTop * $("#selectorContainer").height();
                var Posleft = value.PostLeft * $("#selectorContainer").width();
                var width = $("#selectorContainer").width() * value.RatioW;
                /**/
                if (value.Approve == true) {
                    var body = '<div onclick="Target()" id="signold_' + value.ID + '" class="drag-drop dropped-out oldSign" data-status="1" data-sign ="' + value.IDEmp + '" data-x="' + Posleft + '" data-y="' + Postop + '" style="background-color:transparent; border:unset;transform: translate(' + Posleft + 'px, ' + Postop + 'px);"> <img width="' + width + 'px" id="Isignold_' + value.ID + '" src="data:image/png;base64,' + value.img + '" style="object-fit: fill" /></div>';
                }
                else {
                    var body = '<div onclick="Target()" id="signold_' + value.ID + '" class="drag-drop dropped-out oldSign" data-status="0" data-sign ="' + value.IDEmp + '" data-x="' + Posleft + '" data-y="' + Postop + '" style="background-color:transparent; border:unset;transform: translate(' + Posleft + 'px, ' + Postop + 'px);"> <img width="' + width + 'px" id="Isignold_' + value.ID + '" src="/Assets/img/Sign/request.png" style="object-fit: fill" /></div>';
                }/**/
                $("#parametriContainer").append(body);
            });
        }
    });
};
function Save() {
    var name = document.getElementById("NamePDF").value;
    var id = document.getElementById("IDPDF").value;

    $.ajax({
        url: "/PDF/EditPDF",
        data: { id: id, name: name },
        dataType: "text",
        type: "POST",
        success: function (response) {
        }
    });
    const list = document.getElementById('parametriContainer').children;
    console.log(list);
    $.each(list, function (index, value) {
        var stringid = value.id;
        var status = document.getElementById(stringid).getAttribute('data-status');
        var IDEmpSign = document.getElementById(stringid).getAttribute('data-sign');
        if (IDEmpSign == "null" || IDEmpSign == "") {
            IDEmpSign = document.getElementById("slSign").value
        }
        if (IDEmpSign == "null" || IDEmpSign == "") {
            alert("Chưa chọn người ký");
            document.getElementById("I" + stringid).src = "/Assets/img/Sign/sign1.png";
        }
        else {
            if (status == 0) {
                if (stringid.includes("signold")) {
                    var PostSignTopR = document.getElementById(stringid).getAttribute('data-y');
                    var PostSignLeftR = document.getElementById(stringid).getAttribute('data-x');
                    var perPosSignTop = PostSignTopR / $("#selectorContainer").height();
                    var perPosSignLeft = PostSignLeftR / $("#selectorContainer").width();
                    var perSignW = $("#I" + stringid).width() / $("#selectorContainer").width();
                    $.ajax({
                        url: "/PDF/EditSign",
                        data: { id: Number(stringid.split("_")[1]), idPDF: id, IDEmp: IDEmpSign, IDSign: 0, top: perPosSignTop, left: perPosSignLeft, ratio: perSignW, Status: true },
                        dataType: "text",
                        type: "POST",
                        success: function (response) {
                        }
                    });
                }
                else if (stringid.includes("signnew")) {
                    var PostSignTopR = document.getElementById(stringid).getAttribute('data-y')
                    var PostSignLeftR = document.getElementById(stringid).getAttribute('data-x')
                    var perPosSignTop = PostSignTopR / $("#selectorContainer").height();
                    var perPosSignLeft = PostSignLeftR / $("#selectorContainer").width();
                    var perSignW = $("#I" + stringid).width() / $("#selectorContainer").width();
                    $.ajax({
                        url: "/PDF/EditSign",
                        data: { id: 0, idPDF: id, IDEmp: IDEmpSign, IDSign: 0, top: perPosSignTop, left: perPosSignLeft, ratio: perSignW, Status: true },
                        dataType: "text",
                        type: "POST",
                        success: function (response) {
                            document.getElementById(stringid).id = "signold_" + response;
                        }
                    });
                }
            }
        }
    });
}
function AddPos() {
    var currentPos = document.documentElement.scrollTop;
    const count = $('#parametriContainer .newSign').length + 1;
    var width = $("#selectorContainer").width() / 10;
    var sign = document.getElementById("IDEmpOld").value;
    var body = '<div onclick="Target()" id="signnew' + count + '" class="drag-drop dropped-out newSign" data-sign="' + sign + '" data-status="0" data-x="20" data-y="' + currentPos + '" style="background-color:transparent; border:unset;transform: translate(20px, ' + currentPos + 'px);"> <img width="' + width + 'px" id="Isignnew' + count + '" src="/Assets/img/Sign/request.png" style="object-fit: fill" /></div>';
    $("#parametriContainer").append(body);
    document.getElementById("Isignnew" + count).click();
}
function dragMoveListener(event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
        target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

