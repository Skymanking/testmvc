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
    public class DepartmentDao
    {
        public List<Department> ListAll(string file)
        {
            List<Department> ListDepartment = new List<Department> { };
            using (StreamReader r = new StreamReader(file))
            {
                string json = r.ReadToEnd();
                ListDepartment = JsonConvert.DeserializeObject<List<Department>>(json);
            }
            return ListDepartment.ToList();
        }
    }
}
