var item = {
    init: function () {
        item.registerEvents();
    },
    registerEvents: function () {
        $('.time1').focusout('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var idroom = $('.phonghop option:selected').val();
            var time1 = $(".date").val() + " " + $(".time1").val();
            var time2 = $(".date").val() + " " + $(".time2").val();
            $.ajax({
                url: "/Meeting/CheckStatusRoomMeeting",
                data: { idroom: idroom, time1: time1, time2: time2 },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);

                    if (response.status == true) {
                        $(".btn-status").html("<span style='color:green; font-size:20px;'>Phòng họp còn trống</span>");
                        $('.nutsave').show();
                    }
                    else {
                        $(".btn-status").html("<p style='color:red'>Thông tin phòng họp và thời gian không phù hợp, xin chọn lại phòng họp hoặc thời gian hoặc click vào đây để xem <a href='/Meeting/MeetingRoom/1'>Thông tin phòng họp</a> </p>");
                        $('.nutsave').hide();
                    }
                }
            });
            
        });
        $('.time2').focusout('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var idroom = $('.phonghop option:selected').val();
            var time1 = $(".date").val() + " " + $(".time1").val();
            var time2 = $(".date").val() + " " + $(".time2").val();
            $.ajax({
                url: "/Meeting/CheckStatusRoomMeeting",
                data: { idroom: idroom, time1: time1, time2: time2 },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);

                    if (response.status == true) {
                        $(".btn-status").html("<span style='color:green; font-size:20px;'>Phòng họp còn trống</span>");
                        $('.nutsave').show();
                    }
                    else {
                        $(".btn-status").html("<p style='color:red'>Thông tin phòng họp và thời gian không phù hợp, xin chọn lại phòng họp hoặc thời gian hoặc click vào đây để xem <a href='/Meeting/MeetingRoom/1'>Thông tin phòng họp</a> </p>");
                        $('.nutsave').hide();
                    }
                }
            });
            
        });

        $('.nutsave').mouseover('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var idroom = $('.phonghop option:selected').val();
            var time1 = $(".date").val() + " " + $(".time1").val();
            var time2 = $(".date").val() + " " + $(".time2").val();
            $.ajax({
                url: "/Meeting/CheckStatusRoomMeeting",
                data: { idroom: idroom, time1: time1, time2: time2 },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        $(".btn-status").html("<span></span>");
                        $('.nutsave').show();
                    }
                    else {
                        $(".btn-status").html("<p style='color:red'>Thông tin phòng họp và thời gian không phù hợp, xin chọn lại phòng họp hoặc thời gian hoặc click vào đây để xem <a href='/Meeting/MeetingRoom/1'>Thông tin phòng họp</a> </p>");
                        $('.nutsave').hide();
                    }
                }
            });
        });
        $('.fa-refresh').click('click', function (e) {
            e.preventDefault();
            var btn = $(this);
            var idroom = $('.phonghop option:selected').val();
            var time1 = $(".date").val() + " " + $(".time1").val();
            var time2 = $(".date").val() + " " + $(".time2").val();
            $.ajax({
                url: "/Meeting/CheckStatusRoomMeeting",
                data: { idroom: idroom, time1: time1, time2: time2 },
                dataType: "json",
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        $(".btn-status").html("<span  style='color:green; font-size:20px;'>Phòng họp còn trống</span>");
                        $('.nutsave').show();
                    }
                    else {
                        $(".btn-status").html("<p style='color:red'>Thông tin phòng họp và thời gian không phù hợp, xin chọn lại phòng họp hoặc thời gian hoặc click vào đây để xem <a href='/Meeting/MeetingRoom/1'>Thông tin phòng họp</a> </p>");
                        $('.nutsave').hide();
                    }
                }
            });
        });
    }
}
item.init();