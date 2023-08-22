using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using Model.EF;
using Model.View;
using Newtonsoft.Json;
using PagedList;
namespace Model.Dao
{
    public class EmployeeDao
    {
        public Employee GetById(string username, string file)
        {
            List<Employee> ListUser = new List<Employee> { };
            using (StreamReader r = new StreamReader(file))
            {
                string json = r.ReadToEnd();
                ListUser = JsonConvert.DeserializeObject<List<Employee>>(json);
            }
            var item = ListUser.Where(x => x.ID == username).FirstOrDefault();
            return item;
        }
        public IEnumerable<Employee> ListAllPaging1(string searchString, string file, int page, int pageSize)
        {
            List<Employee> model = new List<Employee> { };
            using (StreamReader r = new StreamReader(file))
            {
                string json = r.ReadToEnd();
                model = JsonConvert.DeserializeObject<List<Employee>>(json);
            }
            if (!string.IsNullOrEmpty(searchString))
            {
                model = model.Where(x => x.ID.Contains(searchString) || x.Name.Contains(searchString)).ToList();
            }

            return model.OrderByDescending(x => x.ID).ToPagedList(page, pageSize);
        }
        public bool CheckIDExit(string ID, string file)
        {
            List<Employee> model = new List<Employee> { };
            using (StreamReader r = new StreamReader(file))
            {
                string json = r.ReadToEnd();
                model = JsonConvert.DeserializeObject<List<Employee>>(json);
            }
            return model.Any(x => x.ID == ID);
        }
        public bool ChangeStatus(string ID, string file)
        {
            List<Employee> model = new List<Employee> { };
            using (StreamReader r = new StreamReader(file))
            {
                string json = r.ReadToEnd();
                model = JsonConvert.DeserializeObject<List<Employee>>(json);
            }
            foreach (var item in model)
            {
                if (item.ID == ID)
                {
                    item.Status = false;
                }
            }
            var convertedJson = JsonConvert.SerializeObject(model, Formatting.Indented);
            File.WriteAllText(file, convertedJson);
            return true;
        }
        public string Insert(Employee entity, string file)
        {
            List<Employee> model = new List<Employee> { };
            entity.Status = true;
            using (StreamReader r = new StreamReader(file))
            {
                string json = r.ReadToEnd();
                model = JsonConvert.DeserializeObject<List<Employee>>(json);
            }
            model.Add(entity);
            var convertedJson = JsonConvert.SerializeObject(model, Formatting.Indented);
            File.WriteAllText(file, convertedJson);
            return "";
        }
        public bool Update(Employee entity, string file)
        {
            try
            {
                List<Employee> model = new List<Employee> { };
                using (StreamReader r = new StreamReader(file))
                {
                    string json = r.ReadToEnd();
                    model = JsonConvert.DeserializeObject<List<Employee>>(json);
                }
                foreach (var item in model)
                {
                    if (item.ID == entity.ID)
                    {
                        item.Name = entity.Name;
                        item.Phone = entity.Phone;
                        item.Email = entity.Email;
                        item.Department = entity.Department;
                        item.Address = entity.Address;
                    }
                }
                var convertedJson = JsonConvert.SerializeObject(model, Formatting.Indented);
                File.WriteAllText(file, convertedJson);
                return true;
            }
            catch (Exception)
            {
                return false;
            }

        }
    }
}
