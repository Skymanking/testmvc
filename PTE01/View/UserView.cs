using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Model.EF;
using Model.Dao;

namespace Model.View
{
    public class UserView1
    {
        public string FullName { get; set; }
        public string DepartmentName { get; set; }
    }
    public class UserView2
    {
        public string UserName { get; set; }
        public string FullName { get; set; }
    }

    public class InfoUser1
    {
        public string FullName { get; set; }
        public string DepartmentName { get; set; }
        public string Email { get; set; }
    }
    public class InfoUser2
    {
        public string UserName { get; set; }
    }
}
