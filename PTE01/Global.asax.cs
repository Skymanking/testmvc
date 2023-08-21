using System;
using System.Collections.Generic;
using System.Linq;
using System.Timers;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;
using Model.Code;
using Model.Dao;

namespace PTE01
{
    // Note: For instructions on enabling IIS6 or IIS7 classic mode, 
    // visit http://go.microsoft.com/?LinkId=9394801
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();

            WebApiConfig.Register(GlobalConfiguration.Configuration);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            //Timer timer = null;
            //// Tạo 1 timer từ libary System.Timers
            //timer = new Timer();
            //// Execute mỗi 60s
            //timer.Interval = 3000000;
            //// Những gì xảy ra khi timer đó dc tick
            //timer.Elapsed += timer_Tick;
            //// Enable timer
            //timer.Enabled = true;
            //// Ghi vào log file khi services dc start lần đầu tiên
            //GuiThongBao();
            //Utilities.WriteLogError("Test for 1st run WindowsService");

        }
        //private void timer_Tick(object sender, ElapsedEventArgs args)
        //{
        //    GuiThongBao();
        //}
        //private void GuiThongBao()
        //{
        //    var mail = new SendEmail();
        //    var dao = new WorkPlanDao();
        //    var work = dao.ListNofitication();
        //    Utilities.WriteLogError(" TimerTick running...");
        //    foreach (var item in work)
        //    {
        //        var id = item.ID;
        //        var info = dao.GetEmail(id);
        //        foreach (var i in info)
        //        {

        //            try
        //            {
        //              mail.Send("system@pte.vn", i.Email, "[SYSTEM PTE] BIEN BAN HOP", "Xin chào " + i.FullName + ",  Anh/chị có kế hoạch và chưa hoàn thành công việc như sau: \n - Chủ đề:" + item.Subject + ". \n - Nội dung: \n" + item.Detail + ".\n - Hạn chót thực hiện vào ngày(" + item.DeadLine.ToString("dd/MM/yyyy") + ").Vui lòng truy cập vào http://system.pte.vn để cập nhật trạng thái công việc \n  Xin Cám Ơn! ");
        //                Utilities.WriteLogError("Da gui mail : idWorkPlan = " + id);
        //                dao.ChangeAlert(id);
        //            }
        //            catch
        //            { Utilities.WriteLogError("Gui mail xay ra loi: ma loi idWorkPlan = " + id); }
        //        }


        //    }
        //}
    }
}