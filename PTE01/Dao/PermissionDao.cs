using Model.EF;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PagedList;
using Model.View;
using Model.Code;

namespace Model.Dao
{
    public class PermissionDao
    {
        public bool CheckUser(string id, string user)
        {
            try
            {
                return true;
            }
            catch { return false; }
        }
    }
}
