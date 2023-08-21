using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.Data.SqlClient;

namespace DataAccessy
{
    public class D_MEETING
    {
        ConnectDatabase cn = new ConnectDatabase();

        public DataTable Wellcome1(long sophong, DateTime thoigian)
        {
            return cn.GetDataTable(@"select * from Meeting where IDRoom='" + sophong.ToString() + "' and TimeFrom<= '" + thoigian.AddMinutes(60).ToString() + "' and TimeTo>'" + thoigian.ToString() + "'");
        }
    }
}
