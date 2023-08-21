
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
function ApproveAll() {

}
function Approve() {

}
function Delete() {
    var id = document.getElementById("IDTarget").value;
    document.getElementById(id.substring(1)).style.display = "none";
    document.getElementById(id.substring(1)).id = "del_" + document.getElementById("IDTarget").value.split("_")[1];
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
    if (ID == "null" || ID == "") {
        alert("Chưa chọn");
    }
    else {
        document.getElementById(ID.substring(1)).setAttribute("data-sign", document.getElementById("slSign").value);
    }
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
    document.getElementById("IDTarget").value = event.target.id;
    document.getElementById("property").style.display = "";
    var IDEmpSign = document.getElementById(event.target.id.substring(1)).getAttribute('data-sign');
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
                var body = '<div onclick="Target()" id="signold_' + value.ID + '" class="drag-drop dropped-out oldSign" data-sign ="' + value.IDEmp + '" data-x="' + Posleft + '" data-y="' + Postop + '" style="background-color:transparent; border:unset;transform: translate(' + Posleft + 'px, ' + Postop + 'px);"> <img width="' + width + 'px" id="Isignold_' + value.ID + '" src="/Assets/img/Sign/request.png" style="object-fit: fill" /></div>';
                /**/
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
    $.each(list, function (index, value) {
        var stringid = value.id;
        console.log("#I" + stringid);

        var IDEmpSign = document.getElementById(stringid).getAttribute('data-sign');
        if (IDEmpSign == "null" || IDEmpSign == "") {
            IDEmpSign = document.getElementById("slSign").value
        }
        if (IDEmpSign == "null" || IDEmpSign == "") {
            console.log(document.getElementById("I" + stringid));
            document.getElementById("I" + stringid).src = "/Assets/img/Sign/sign1.png";
        }
        else {

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
            else {
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
                    }
                });
            }
        }
    });
}
function AddPos() {
    var currentPos = document.documentElement.scrollTop;
    const count = $('#parametriContainer .newSign').length + 1;
    var width = $("#selectorContainer").width() / 10;
    var body = '<div onclick="Target()" id="sign' + count + '" class="drag-drop dropped-out newSign" data-sign="" data-x="20" data-y="' + currentPos + '" style="background-color:transparent; border:unset;transform: translate(20px, ' + currentPos + 'px);"> <img width="' + width + 'px" id="Isign' + count + '" src="/Assets/img/Sign/request.png" style="object-fit: fill" /></div>';
    $("#parametriContainer").append(body);
}
function CreatePDFfromHTML() {
    var HTML_Width = $("#selectorContainer").width();
    var HTML_Height = $("#selectorContainer").height();
    var top_left_margin = 15;
    var PDF_Width = HTML_Width + (top_left_margin * 2);
    var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;

    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

    html2canvas($("#selectorContainer")[0]).then(function (canvas) {
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
        pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
        for (var i = 1; i <= totalPDFPages; i++) {
            pdf.addPage(PDF_Width, PDF_Height);
            pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
        }
        pdf.save("Your_PDF_Name.pdf");
    });
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

