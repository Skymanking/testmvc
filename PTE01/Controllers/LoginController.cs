using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Model.Dao;
using Model.Code;
using ShopOnline1.Areas.Admin.Controllers;
namespace PTE01.Controllers
{
    public class LoginController : Controller
    {
        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public ActionResult Index2()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Login(LoginModels model)
        {
            if (ModelState.IsValid)
            {
                var dao = new UserDao();
                string filep = Server.MapPath(@"/Data/User.json");
                var result = dao.Login(model.UserName, Encryptor.MD5Hash(model.Password), filep, true);
                if (result == 1)
                {
                    var user = dao.GetById(model.UserName, filep);
                    var userSession = new UserLogin();
                    userSession.UserName = user.Username;
                    userSession.Level = user.Level;
                    //var listCredentials = dao.GetListCredential(model.UserName);

                    //Session.Add(CommonConstants.SESSION_CREDENTIALS, listCredentials);
                    Session.Add(CommonConstants.USER_SESSION, userSession);
                    //var mail = new SendEmail();
                    //mail.Send("system@pte.vn", "thang.tranit@pte.vn", "chu de asfiguasfguias", "noi dung sajfkasfhasfoas");
                    if (userSession.UserName == "nhanvien")
                    {
                        return RedirectToAction("Index2", "Home");
                    }
                    return RedirectToAction("Index", "Home");
                }
                else if (result == 0)
                {
                    ModelState.AddModelError("", "Tài khoản không tồn tại.");
                }
                else if (result == -1)
                {
                    ModelState.AddModelError("", "Tài khoản đang bị khoá.");
                }
                else if (result == -2)
                {
                    ModelState.AddModelError("", "Mật khẩu không đúng.");
                }
                else if (result == -3)
                {
                    ModelState.AddModelError("", "Nhân viên đã nghỉ việc");
                }
                else
                {
                    ModelState.AddModelError("", "đăng nhập không đúng.");
                }
            }
            return View("Index");
        }

        public ActionResult Logout()
        {
            Session[CommonConstants.USER_SESSION] = null;
            return Redirect("/");
        }

    }
}
