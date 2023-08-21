using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.Data.SqlClient;

namespace DataAccessy
{
    public class D_PERSONAL
    {
        ConnectDatabase cn = new ConnectDatabase();
      
        public DataTable Truyvan1(string proviso)
        {
            return cn.GetDataTable(@"select a.ID, a.IDPer,a.TypeH, a.StartDate, a.EndDate, b.Name as NamePer from HDLD a, Personal b where a.IDPer=b.ID and IDPer=N'" + proviso+"'");
        }
    }
}
