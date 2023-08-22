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
    public class UserDao
    {
        public int Login(string userName, string passWord, string file, bool isLoginAdmin = false)
        {
            List<User> ListUser = new List<User> { };
            using (StreamReader r = new StreamReader(file))
            {
                string json = r.ReadToEnd();
                ListUser = JsonConvert.DeserializeObject<List<User>>(json);
            }
            var result = ListUser.SingleOrDefault(x => x.Username == userName);
            if (result == null)
            {
                return 0;
            }
            else
            {
                if (result.Status == false)
                {
                    return -1;
                }
                else
                {
                    if (result.Password == passWord)
                    {
                        return 1;
                    }
                    else
                    {
                        return -2;
                    }
                }
            }
        }
        public User GetById(string username, string file)
        {
            List<User> ListUser = new List<User> { };
            using (StreamReader r = new StreamReader(file))
            {
                string json = r.ReadToEnd();
                ListUser = JsonConvert.DeserializeObject<List<User>>(json);
            }
            var item = ListUser.Where(x => x.Username == username).FirstOrDefault();
            return item;
        }
        public IEnumerable<User> ListAllPaging1(string searchString, string file, int page, int pageSize)
        {
            List<User> model = new List<User> { };
            using (StreamReader r = new StreamReader(file))
            {
                string json = r.ReadToEnd();
                model = JsonConvert.DeserializeObject<List<User>>(json);
            }
            if (!string.IsNullOrEmpty(searchString))
            {
                model = model.Where(x => x.Username.Contains(searchString) || x.FullName.Contains(searchString)).ToList();
            }

            return model.OrderByDescending(x => x.Username).ToPagedList(page, pageSize);
        }
        public string Insert(User entity, string file)
        {
            List<User> model = new List<User> { };
            using (StreamReader r = new StreamReader(file))
            {
                string json = r.ReadToEnd();
                model = JsonConvert.DeserializeObject<List<User>>(json);
            }
            model.Add(entity);
            var convertedJson = JsonConvert.SerializeObject(model, Formatting.Indented);
            File.WriteAllText(file, convertedJson);
            return "";
        }
        public bool Update(User entity, string file)
        {
            try
            {
                List<User> model = new List<User> { };
                using (StreamReader r = new StreamReader(file))
                {
                    string json = r.ReadToEnd();
                    model = JsonConvert.DeserializeObject<List<User>>(json);
                }
                foreach (var item in model)
                {
                    if (item.Username == entity.Username)
                    {
                        item.FullName = entity.FullName;
                        item.Status = entity.Status;
                        item.Level = entity.Level;
                        if (!string.IsNullOrEmpty(entity.Password))
                        {
                            item.Password = entity.Password;

                        }
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
