using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Model.Code
{
    public class LoginModels
    {
        [Required(ErrorMessage="Bạn chưa nhập username!")]
        public string UserName { set; get; }
        [Required(ErrorMessage = "Bạn chưa nhập password!")]
        public string Password { set; get; }
        public bool RememberMe { set; get; }
    }
}