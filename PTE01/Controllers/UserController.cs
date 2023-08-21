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
            var check1 = new PermissionDao().CheckUser("ManageUser", session.UserName);
            IEnumerable<User> model = null;
            if (check1)
            {
                var dao = new UserDao();
                model = dao.ListAllPaging1(searchString, page, pageSize);
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
            var check1 = new PermissionDao().CheckUser("ManageUser", session.UserName);
            ViewBag.permission = check1;
            return View();
        }


        public ActionResult Edit(string userName)
        {
            Session["FOLDERPATH_SESSION"] = "NhanVien";
            var user = new UserDao().ViewDetail(userName);
            var session = (UserLogin)Session[CommonConstants.USER_SESSION];
            var check1 = new PermissionDao().CheckUser("ManageUser", session.UserName);
            ViewBag.permission = check1;
            return View(user);
        }

        [HttpPost]
        public ActionResult Create(User user)
        {
            var session = (UserLogin)Session[CommonConstants.USER_SESSION];
            var check1 = new PermissionDao().CheckUser("ManageUser", session.UserName);
            if (check1)
            {
                var dao = new UserDao();
                var encryptedMd5Pas = Encryptor.MD5Hash(user.Password);
                user.Password = encryptedMd5Pas;
                dao.Insert(user);
            }
            return RedirectToAction("Index", "User");
        }
        [HttpPost]
        public ActionResult Edit(User user)
        {
            var session = (UserLogin)Session[CommonConstants.USER_SESSION];
            var check1 = new PermissionDao().CheckUser("ManageUser", session.UserName);
            if (check1)
            {
                var dao = new UserDao();
                if (!string.IsNullOrEmpty(user.Password))
                {
                    var encryptedMd5Pas = Encryptor.MD5Hash(user.Password);
                    user.Password = encryptedMd5Pas;
                }
                dao.Update(user);
            }
            return RedirectToAction("Index", "User");
        }
        [HttpDelete]
        public ActionResult Delete(string userName)
        {
            new UserDao().Delete(userName);

            return RedirectToAction("Index");
        }

        [HttpPost]
        public JsonResult ChangeStatus(string userName)
        {
            var result = new UserDao().ChangeStatus(userName);
            return Json(new
            {
                status = result
            });
        }
    }
}
