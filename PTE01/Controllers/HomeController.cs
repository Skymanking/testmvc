using ShopOnline1.Areas.Admin.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Model.View;
using Model.Code;
using Model.Dao;


namespace PTE01.Controllers
{
    public class HomeController : BaseController
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Header()
        {
            var session = (UserLogin)Session[CommonConstants.USER_SESSION];
            var owner = new UserDao();
            string filep = Server.MapPath(@"/Data/User.json");
            ViewBag.infouser = owner.GetById(session.UserName, filep);
            return View();
        }
        public ActionResult LeftMenu3()
        {
            var session = (UserLogin)Session[CommonConstants.USER_SESSION];
            string filep = Server.MapPath(@"/Data/User.json");
            var model = new UserDao().GetById(session.UserName, filep);
            ViewBag.infoUser = model;
            return PartialView(model);
        }
    }
}
