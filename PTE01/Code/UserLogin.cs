using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Model.Code
{
    [Serializable]
    public class UserLogin
    {
        public string UserID { set; get; }
        public string UserName { set; get; }
        public long DeID { set; get; }
        public string Level { set; get; }
    }
}