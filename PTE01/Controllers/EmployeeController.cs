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
    public class EmployeeController : BaseController
    {
        public ActionResult Index(string searchString, int page = 1, int pageSize = 40)
        {
            var session = (UserLogin)Session[CommonConstants.USER_SESSION];
            string filep = Server.MapPath(@"/Data/Employees.json");
            string filePer = Server.MapPath(@"/Data/User.json");
            var check1 = new PermissionDao().CheckUser("Administrator", session.UserName, filePer);
            IEnumerable<Employee> model = null;
            var dao = new EmployeeDao();
            model = dao.ListAllPaging1(searchString, filep, page, pageSize);
            ViewBag.SearchString = searchString;
            ViewBag.permission = check1;
            return View(model);
        }
        [HttpGet]
        public ActionResult Create()
        {
            Session["FOLDERPATH_SESSION"] = "NhanVien";
            var session = (UserLogin)Session[CommonConstants.USER_SESSION];
            string fileDep = Server.MapPath(@"/Data/Department.json");
            string filePer = Server.MapPath(@"/Data/User.json");
            var check1 = new PermissionDao().CheckUser("Administrator", session.UserName, filePer);
            ViewBag.permission = check1;
            ViewBag.ListDepartment = new DepartmentDao().ListAll(fileDep);
            return View();
        }
        public ActionResult Edit(string emp)
        {
            Session["FOLDERPATH_SESSION"] = "NhanVien";
            string filep = Server.MapPath(@"/Data/Employees.json");
            string fileDep = Server.MapPath(@"/Data/Department.json");
            ViewBag.ListDepartment = new DepartmentDao().ListAll(fileDep);
            var employee = new EmployeeDao().GetById(emp, filep);
            var session = (UserLogin)Session[CommonConstants.USER_SESSION];
            string filePer = Server.MapPath(@"/Data/User.json");
            var check1 = new PermissionDao().CheckUser("Administrator", session.UserName, filePer);
            ViewBag.permission = check1;
            return View(employee);
        }
        public ActionResult ViewEmp(string emp)
        {
            Session["FOLDERPATH_SESSION"] = "NhanVien";
            string filep = Server.MapPath(@"/Data/Employees.json");
            string fileDep = Server.MapPath(@"/Data/Department.json");
            ViewBag.ListDepartment = new DepartmentDao().ListAll(fileDep);
            var employee = new EmployeeDao().GetById(emp, filep);
            var session = (UserLogin)Session[CommonConstants.USER_SESSION];
            return View(employee);
        }
        [HttpPost]
        public ActionResult Create(Employee employee)
        {
            var session = (UserLogin)Session[CommonConstants.USER_SESSION];
            string filep = Server.MapPath(@"/Data/Employees.json");
            string filePer = Server.MapPath(@"/Data/User.json");
            var check1 = new PermissionDao().CheckUser("Administrator", session.UserName, filePer);
            if (check1)
            {
                var dao = new EmployeeDao();
                dao.Insert(employee, filep);
            }
            return RedirectToAction("Index", "Employee");
        }
        [HttpPost]
        public ActionResult Edit(Employee user)
        {
            var session = (UserLogin)Session[CommonConstants.USER_SESSION];
            string filep = Server.MapPath(@"/Data/Employees.json");
            string fileUser = Server.MapPath(@"/Data/User.json");
            var check1 = new PermissionDao().CheckUser("Administrator", session.UserName, fileUser);
            if (check1)
            {
                var dao = new EmployeeDao();
                dao.Update(user, filep);
            }
            return RedirectToAction("Index", "Employee");
        }
        [HttpPost]
        public bool CheckIDExit(string ID)
        {
            string filep = Server.MapPath(@"/Data/Employees.json");
            return new EmployeeDao().CheckIDExit(ID, filep);
        }
    }
}
