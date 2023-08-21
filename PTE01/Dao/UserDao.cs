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
        public IEnumerable<User> ListAllPaging1(string searchString, int page, int pageSize)
        {
            IQueryable<User> model = null;
            if (!string.IsNullOrEmpty(searchString))
            {
                model = model.Where(x => x.Username.Contains(searchString) || x.FullName.Contains(searchString));
            }

            return model.OrderByDescending(x => x.Username).ToPagedList(page, pageSize);
        }
        public bool ChangePassword(string userName, string pass)
        {
            try
            {
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public string ViewInfo1(string user)
        {
            return "";
        }
        public string ViewDetail(string user)
        {
            return "";
        }
        public string Insert(User entity)
        {
            return "";
        }
        public bool Update(User entity)
        {
            try
            {

                return true;
            }
            catch (Exception)
            {
                return false;
            }

        }
        public bool Delete(string userName)
        {
            try
            {
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool ChangeStatus(string userName)
        {
            return true;
        }
    }
}
