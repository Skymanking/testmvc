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
using System.IO;
using Newtonsoft.Json;

namespace Model.Dao
{
    public class PermissionDao
    {
        public List<Permission> ListAll(string file)
        {
            List<Permission> ListPermission = new List<Permission> { };
            using (StreamReader r = new StreamReader(file))
            {
                string json = r.ReadToEnd();
                ListPermission = JsonConvert.DeserializeObject<List<Permission>>(json);
            }
            return ListPermission.ToList();
        }
        public bool CheckUser(string id, string user, string file)
        {
            try
            {
                List<User> ListUser = new List<User> { };
                using (StreamReader r = new StreamReader(file))
                {
                    string json = r.ReadToEnd();
                    ListUser = JsonConvert.DeserializeObject<List<User>>(json);
                }
                return ListUser.Any(x => x.Username == user && x.Level == id);
            }
            catch { return false; }
        }
    }
}
