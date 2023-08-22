using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Model.EF;
using Model.Dao;
using PagedList;
using Model.Code;
using ShopOnline1.Areas.Admin.Controllers;

namespace PTE01.Controllers
{
    public class UserController : BaseController
    {
        //
        // GET: /User/

        public ActionResult Index(string searchString, int page = 1, int pageSize = 40)
        {

            var session = (UserLogin)Session[CommonConstants.USER_SESSION];
            string filep = Server.MapPath(@"/Data/User.json");
            var check1 = new PermissionDao().CheckUser("Administrator", session.UserName, filep);
            IEnumerable<User> model = null;
            if (check1)
            {
                var dao = new UserDao();
                model = dao.ListAllPaging1(searchString, filep, page, pageSize);
                ViewBag.SearchString = searchString;
                ViewBag.permission = check1;
                return View(model);
            }
            else
            { return RedirectToAction("Index", "Home"); }

        }
        [HttpGet]
        public ActionResult Create()
        {
            Session["FOLDERPATH_SESSION"] = "NhanVien";
            var session = (UserLogin)Session[CommonConstants.USER_SESSION];
            string filePer = Server.MapPath(@"/Data/Permission.json");
            string filep = Server.MapPath(@"/Data/User.json");
            ViewBag.ListPer = new PermissionDao().ListAll(filePer);
            var check1 = new PermissionDao().CheckUser("Administrator", session.UserName, filep);
            ViewBag.permission = check1;
            return View();
        }


        public ActionResult Edit(string userName)
        {
            Session["FOLDERPATH_SESSION"] = "NhanVien";
            string filep = Server.MapPath(@"/Data/User.json");
            string filePer = Server.MapPath(@"/Data/Permission.json");
            ViewBag.ListPer = new PermissionDao().ListAll(filePer);
            var user = new UserDao().GetById(userName, filep);
            var session = (UserLogin)Session[CommonConstants.USER_SESSION];
            var check1 = new PermissionDao().CheckUser("Administrator", session.UserName, filep);
            ViewBag.permission = check1;
            return View(user);
        }

        [HttpPost]
        public ActionResult Create(User user)
        {
            var session = (UserLogin)Session[CommonConstants.USER_SESSION];
            string filep = Server.MapPath(@"/Data/User.json");
            var check1 = new PermissionDao().CheckUser("Administrator", session.UserName, filep);
            if (check1)
            {
                var dao = new UserDao();
                var encryptedMd5Pas = Encryptor.MD5Hash(user.Password);
                user.Password = encryptedMd5Pas;
                dao.Insert(user, filep);
            }
            return RedirectToAction("Index", "User");
        }
        [HttpPost]
        public ActionResult Edit(User user)
        {
            var session = (UserLogin)Session[CommonConstants.USER_SESSION];
            string filep = Server.MapPath(@"/Data/User.json");
            var check1 = new PermissionDao().CheckUser("Administrator", session.UserName, filep);
            if (check1)
            {
                var dao = new UserDao();
                if (!string.IsNullOrEmpty(user.Password))
                {
                    var encryptedMd5Pas = Encryptor.MD5Hash(user.Password);
                    user.Password = encryptedMd5Pas;
                }
                dao.Update(user, filep);
            }
            return RedirectToAction("Index", "User");
        }
    }
}
