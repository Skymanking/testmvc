var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
      
        $('.select00').change('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            //var idroom = $('.phonghop option:selected').val();
            var perid = $('#detail_0__Username option:selected').val();
            var time1 = $(".date").val() + " " + $(".time1").val();
            var time2 = $(".date").val() + " " + $(".time2").val();
            $.ajax({
                url: "/Meeting/CheckStatusPersonalMeeting",
                data: { perid: perid, time1: time1, time2: time2 },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        $(".perStatus00").html("<span  style='color:green; font-size:30px;'><img src='../../Assets/theme3/dist/img/inobusy.png' /></span>");
                        $('.nutsave').show();
                    }
                    else {
                        $(".perStatus00").html("<span  style='color:red; font-size:30px;'><img src='../../Assets/theme3/dist/img/ibusy.png' /></span>");
                        $('.nutsave').hide();
                    }
                }
            });
        });
        $('.select01').change('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            //var idroom = $('.phonghop option:selected').val();
            var perid = $('#detail_1__Username option:selected').val();
            var time1 = $(".date").val() + " " + $(".time1").val();
            var time2 = $(".date").val() + " " + $(".time2").val();
            $.ajax({
                url: "/Meeting/CheckStatusPersonalMeeting",
                data: { perid: perid, time1: time1, time2: time2 },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        $(".perStatus01").html("<span  style='color:green; font-size:30px;'><img src='../../Assets/theme3/dist/img/inobusy.png' /></span>");
                        $('.nutsave').show();
                    }
                    else {
                        $(".perStatus01").html("<span  style='color:red; font-size:30px;'><img src='../../Assets/theme3/dist/img/ibusy.png' /></span>");
                        $('.nutsave').hide();
                    }
                }
            });
        });
        $('.select02').change('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            //var idroom = $('.phonghop option:selected').val();
            var perid = $('#detail_2__Username option:selected').val();
            var time1 = $(".date").val() + " " + $(".time1").val();
            var time2 = $(".date").val() + " " + $(".time2").val();
            $.ajax({
                url: "/Meeting/CheckStatusPersonalMeeting",
                data: { perid: perid, time1: time1, time2: time2 },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        $(".perStatus02").html("<span  style='color:green; font-size:30px;'><img src='../../Assets/theme3/dist/img/inobusy.png' /></span>");
                        $('.nutsave').show();
                    }
                    else {
                        $(".perStatus02").html("<span  style='color:red; font-size:30px;'><img src='../../Assets/theme3/dist/img/ibusy.png' /></span>");
                        $('.nutsave').hide();
                    }
                }
            });
        });
        $('.select03').change('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            //var idroom = $('.phonghop option:selected').val();
            var perid = $('#detail_3__Username option:selected').val();
            var time1 = $(".date").val() + " " + $(".time1").val();
            var time2 = $(".date").val() + " " + $(".time2").val();
            $.ajax({
                url: "/Meeting/CheckStatusPersonalMeeting",
                data: { perid: perid, time1: time1, time2: time2 },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        $(".perStatus03").html("<span  style='color:green; font-size:30px;'><img src='../../Assets/theme3/dist/img/inobusy.png' /></span>");
                        $('.nutsave').show();
                    }
                    else {
                        $(".perStatus03").html("<span  style='color:red; font-size:30px;'><img src='../../Assets/theme3/dist/img/ibusy.png' /></span>");
                        $('.nutsave').hide();
                    }
                }
            });
        });
        $('.select04').change('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            //var idroom = $('.phonghop option:selected').val();
            var perid = $('#detail_4__Username option:selected').val();
            var time1 = $(".date").val() + " " + $(".time1").val();
            var time2 = $(".date").val() + " " + $(".time2").val();
            $.ajax({
                url: "/Meeting/CheckStatusPersonalMeeting",
                data: { perid: perid, time1: time1, time2: time2 },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        $(".perStatus04").html("<span  style='color:green; font-size:30px;'><img src='../../Assets/theme3/dist/img/inobusy.png' /></span>");
                        $('.nutsave').show();
                    }
                    else {
                        $(".perStatus04").html("<span  style='color:red; font-size:30px;'><img src='../../Assets/theme3/dist/img/ibusy.png' /></span>");
                        $('.nutsave').hide();
                    }
                }
            });
        });
        $('.select05').change('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            //var idroom = $('.phonghop option:selected').val();
            var perid = $('#detail_5__Username option:selected').val();
            var time1 = $(".date").val() + " " + $(".time1").val();
            var time2 = $(".date").val() + " " + $(".time2").val();
            $.ajax({
                url: "/Meeting/CheckStatusPersonalMeeting",
                data: { perid: perid, time1: time1, time2: time2 },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        $(".perStatus05").html("<span  style='color:green; font-size:30px;'><img src='../../Assets/theme3/dist/img/inobusy.png' /></span>");
                        $('.nutsave').show();
                    }
                    else {
                        $(".perStatus05").html("<span  style='color:red; font-size:30px;'><img src='../../Assets/theme3/dist/img/ibusy.png' /></span>");
                        $('.nutsave').hide();
                    }
                }
            });
        });
        $('.select06').change('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            //var idroom = $('.phonghop option:selected').val();
            var perid = $('#detail_6__Username option:selected').val();
            var time1 = $(".date").val() + " " + $(".time1").val();
            var time2 = $(".date").val() + " " + $(".time2").val();
            $.ajax({
                url: "/Meeting/CheckStatusPersonalMeeting",
                data: { perid: perid, time1: time1, time2: time2 },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        $(".perStatus06").html("<span  style='color:green; font-size:30px;'><img src='../../Assets/theme3/dist/img/inobusy.png' /></span>");
                        $('.nutsave').show();
                    }
                    else {
                        $(".perStatus06").html("<span  style='color:red; font-size:30px;'><img src='../../Assets/theme3/dist/img/ibusy.png' /></span>");
                        $('.nutsave').hide();
                    }
                }
            });
        });
        $('.select07').change('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            //var idroom = $('.phonghop option:selected').val();
            var perid = $('#detail_7__Username option:selected').val();
            var time1 = $(".date").val() + " " + $(".time1").val();
            var time2 = $(".date").val() + " " + $(".time2").val();
            $.ajax({
                url: "/Meeting/CheckStatusPersonalMeeting",
                data: { perid: perid, time1: time1, time2: time2 },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        $(".perStatus07").html("<span  style='color:green; font-size:30px;'><img src='../../Assets/theme3/dist/img/inobusy.png' /></span>");
                        $('.nutsave').show();
                    }
                    else {
                        $(".perStatus07").html("<span  style='color:red; font-size:30px;'><img src='../../Assets/theme3/dist/img/ibusy.png' /></span>");
                        $('.nutsave').hide();
                    }
                }
            });
        });
        $('.select08').change('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            //var idroom = $('.phonghop option:selected').val();
            var perid = $('#detail_8__Username option:selected').val();
            var time1 = $(".date").val() + " " + $(".time1").val();
            var time2 = $(".date").val() + " " + $(".time2").val();
            $.ajax({
                url: "/Meeting/CheckStatusPersonalMeeting",
                data: { perid: perid, time1: time1, time2: time2 },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        $(".perStatus08").html("<span  style='color:green; font-size:30px;'><img src='../../Assets/theme3/dist/img/inobusy.png' /></span>");
                        $('.nutsave').show();
                    }
                    else {
                        $(".perStatus08").html("<span  style='color:red; font-size:30px;'><img src='../../Assets/theme3/dist/img/ibusy.png' /></span>");
                        $('.nutsave').hide();
                    }
                }
            });
        });
        $('.select09').change('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            //var idroom = $('.phonghop option:selected').val();
            var perid = $('#detail_9__Username option:selected').val();
            var time1 = $(".date").val() + " " + $(".time1").val();
            var time2 = $(".date").val() + " " + $(".time2").val();
            $.ajax({
                url: "/Meeting/CheckStatusPersonalMeeting",
                data: { perid: perid, time1: time1, time2: time2 },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        $(".perStatus09").html("<span  style='color:green; font-size:30px;'><img src='../../Assets/theme3/dist/img/inobusy.png' /></span>");
                        $('.nutsave').show();
                    }
                    else {
                        $(".perStatus09").html("<span  style='color:red; font-size:30px;'><img src='../../Assets/theme3/dist/img/ibusy.png' /></span>");
                        $('.nutsave').hide();
                    }
                }
            });
        });
        $('.select10').change('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            //var idroom = $('.phonghop option:selected').val();
            var perid = $('#detail_10__Username option:selected').val();
            var time1 = $(".date").val() + " " + $(".time1").val();
            var time2 = $(".date").val() + " " + $(".time2").val();
            $.ajax({
                url: "/Meeting/CheckStatusPersonalMeeting",
                data: { perid: perid, time1: time1, time2: time2 },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        $(".perStatus10").html("<span  style='color:green; font-size:30px;'><img src='../../Assets/theme3/dist/img/inobusy.png' /></span>");
                        $('.nutsave').show();
                    }
                    else {
                        $(".perStatus10").html("<span  style='color:red; font-size:30px;'><img src='../../Assets/theme3/dist/img/ibusy.png' /></span>");
                        $('.nutsave').hide();
                    }
                }
            });
        });
        $('.select11').change('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            //var idroom = $('.phonghop option:selected').val();
            var perid = $('#detail_11__Username option:selected').val();
            var time1 = $(".date").val() + " " + $(".time1").val();
            var time2 = $(".date").val() + " " + $(".time2").val();
            $.ajax({
                url: "/Meeting/CheckStatusPersonalMeeting",
                data: { perid: perid, time1: time1, time2: time2 },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        $(".perStatus11").html("<span  style='color:green; font-size:30px;'><img src='../../Assets/theme3/dist/img/inobusy.png' /></span>");
                        $('.nutsave').show();
                    }
                    else {
                        $(".perStatus11").html("<span  style='color:red; font-size:30px;'><img src='../../Assets/theme3/dist/img/ibusy.png' /></span>");
                        $('.nutsave').hide();
                    }
                }
            });
        });
        $('.select12').change('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            //var idroom = $('.phonghop option:selected').val();
            var perid = $('#detail_12__Username option:selected').val();
            var time1 = $(".date").val() + " " + $(".time1").val();
            var time2 = $(".date").val() + " " + $(".time2").val();
            $.ajax({
                url: "/Meeting/CheckStatusPersonalMeeting",
                data: { perid: perid, time1: time1, time2: time2 },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        $(".perStatus12").html("<span  style='color:green; font-size:30px;'><img src='../../Assets/theme3/dist/img/inobusy.png' /></span>");
                        $('.nutsave').show();
                    }
                    else {
                        $(".perStatus12").html("<span  style='color:red; font-size:30px;'><img src='../../Assets/theme3/dist/img/ibusy.png' /></span>");
                        $('.nutsave').hide();
                    }
                }
            });
        });
        $('.select13').change('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            //var idroom = $('.phonghop option:selected').val();
            var perid = $('#detail_13__Username option:selected').val();
            var time1 = $(".date").val() + " " + $(".time1").val();
            var time2 = $(".date").val() + " " + $(".time2").val();
            $.ajax({
                url: "/Meeting/CheckStatusPersonalMeeting",
                data: { perid: perid, time1: time1, time2: time2 },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        $(".perStatus13").html("<span  style='color:green; font-size:30px;'><img src='../../Assets/theme3/dist/img/inobusy.png' /></span>");
                        $('.nutsave').show();
                    }
                    else {
                        $(".perStatus13").html("<span  style='color:red; font-size:30px;'><img src='../../Assets/theme3/dist/img/ibusy.png' /></span>");
                        $('.nutsave').hide();
                    }
                }
            });
        });
        $('.select14').change('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            //var idroom = $('.phonghop option:selected').val();
            var perid = $('#detail_14__Username option:selected').val();
            var time1 = $(".date").val() + " " + $(".time1").val();
            var time2 = $(".date").val() + " " + $(".time2").val();
            $.ajax({
                url: "/Meeting/CheckStatusPersonalMeeting",
                data: { perid: perid, time1: time1, time2: time2 },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        $(".perStatus14").html("<span  style='color:green; font-size:30px;'><img src='../../Assets/theme3/dist/img/inobusy.png' /></span>");
                        $('.nutsave').show();
                    }
                    else {
                        $(".perStatus14").html("<span  style='color:red; font-size:30px;'><img src='../../Assets/theme3/dist/img/ibusy.png' /></span>");
                        $('.nutsave').hide();
                    }
                }
            });
        });
        $('.select15').change('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            //var idroom = $('.phonghop option:selected').val();
            var perid = $('#detail_15__Username option:selected').val();
            var time1 = $(".date").val() + " " + $(".time1").val();
            var time2 = $(".date").val() + " " + $(".time2").val();
            $.ajax({
                url: "/Meeting/CheckStatusPersonalMeeting",
                data: { perid: perid, time1: time1, time2: time2 },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        $(".perStatus15").html("<span  style='color:green; font-size:30px;'><img src='../../Assets/theme3/dist/img/inobusy.png' /></span>");
                        $('.nutsave').show();
                    }
                    else {
                        $(".perStatus15").html("<span  style='color:red; font-size:30px;'><img src='../../Assets/theme3/dist/img/ibusy.png' /></span>");
                        $('.nutsave').hide();
                    }
                }
            });
        });
        $('.select16').change('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            //var idroom = $('.phonghop option:selected').val();
            var perid = $('#detail_16__Username option:selected').val();
            var time1 = $(".date").val() + " " + $(".time1").val();
            var time2 = $(".date").val() + " " + $(".time2").val();
            $.ajax({
                url: "/Meeting/CheckStatusPersonalMeeting",
                data: { perid: perid, time1: time1, time2: time2 },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        $(".perStatus16").html("<span  style='color:green; font-size:30px;'><img src='../../Assets/theme3/dist/img/inobusy.png' /></span>");
                        $('.nutsave').show();
                    }
                    else {
                        $(".perStatus16").html("<span  style='color:red; font-size:30px;'><img src='../../Assets/theme3/dist/img/ibusy.png' /></span>");
                        $('.nutsave').hide();
                    }
                }
            });
        });
        $('.select17').change('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            //var idroom = $('.phonghop option:selected').val();
            var perid = $('#detail_17__Username option:selected').val();
            var time1 = $(".date").val() + " " + $(".time1").val();
            var time2 = $(".date").val() + " " + $(".time2").val();
            $.ajax({
                url: "/Meeting/CheckStatusPersonalMeeting",
                data: { perid: perid, time1: time1, time2: time2 },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        $(".perStatus17").html("<span  style='color:green; font-size:30px;'><img src='../../Assets/theme3/dist/img/inobusy.png' /></span>");
                        $('.nutsave').show();
                    }
                    else {
                        $(".perStatus17").html("<span  style='color:red; font-size:30px;'><img src='../../Assets/theme3/dist/img/ibusy.png' /></span>");
                        $('.nutsave').hide();
                    }
                }
            });
        });
        $('.select18').change('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            //var idroom = $('.phonghop option:selected').val();
            var perid = $('#detail_18__Username option:selected').val();
            var time1 = $(".date").val() + " " + $(".time1").val();
            var time2 = $(".date").val() + " " + $(".time2").val();
            $.ajax({
                url: "/Meeting/CheckStatusPersonalMeeting",
                data: { perid: perid, time1: time1, time2: time2 },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        $(".perStatus18").html("<span  style='color:green; font-size:30px;'><img src='../../Assets/theme3/dist/img/inobusy.png' /></span>");
                        $('.nutsave').show();
                    }
                    else {
                        $(".perStatus18").html("<span  style='color:red; font-size:30px;'><img src='../../Assets/theme3/dist/img/ibusy.png' /></span>");
                        $('.nutsave').hide();
                    }
                }
            });
        });
        $('.select19').change('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            //var idroom = $('.phonghop option:selected').val();
            var perid = $('#detail_19__Username option:selected').val();
            var time1 = $(".date").val() + " " + $(".time1").val();
            var time2 = $(".date").val() + " " + $(".time2").val();
            $.ajax({
                url: "/Meeting/CheckStatusPersonalMeeting",
                data: { perid: perid, time1: time1, time2: time2 },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        $(".perStatus19").html("<span  style='color:green; font-size:30px;'><img src='../../Assets/theme3/dist/img/inobusy.png' /></span>");
                        $('.nutsave').show();
                    }
                    else {
                        $(".perStatus19").html("<span  style='color:red; font-size:30px;'><img src='../../Assets/theme3/dist/img/ibusy.png' /></span>");
                        $('.nutsave').hide();
                    }
                }
            });
        });
    }
}
item.init();