using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.Data.SqlClient;

namespace DataAccessy
{
    public class ConnectDatabase
    {
        public static SqlConnection con;
        public static string serverip;
        public static string dataname;
        public static string userdata;
        public static string passdata;

        public void OpenConnect()
        {// ConnectDatabase.con = new SqlConnection(@"Data Source=OXHELEN\SQLEXPRESS;Initial Catalog=VIETSOFT;Integrated Security=True;");
            try
            {
                if (ConnectDatabase.con == null)
                    ConnectDatabase.con = new SqlConnection(@"Server=14.161.1.52;Database=PTE01;Uid=thangit;Pwd=data@pte2018;");
                if (ConnectDatabase.con.State != ConnectionState.Open)
                    ConnectDatabase.con.Open();

            }
            catch
            { }

        }
        public void CloseConnect()
        {
            if (ConnectDatabase.con != null)
            {
                if (ConnectDatabase.con.State == ConnectionState.Open)
                    ConnectDatabase.con.Close();
            }
        }
        public void ExeCmdSql(string strsql)
        {
            try
            {
                OpenConnect();
                SqlCommand cmd = new SqlCommand(strsql, con);
                cmd.ExecuteNonQuery();
                CloseConnect();
            }
            catch
            {

            }
        }
        public DataTable GetDataTable(string strsql)
        {
            try
            {
                OpenConnect();
                DataTable dt = new DataTable();
                SqlDataAdapter da = new SqlDataAdapter(strsql, ConnectDatabase.con);
                da.Fill(dt);
                CloseConnect();
                return dt;
            }
            catch
            {
                return null;
            }
        }
        public string GetValue(string strsql)
        {
            try
            {
                string temp = null;
                OpenConnect();
                SqlCommand cmd = new SqlCommand(strsql, con);
                SqlDataReader read = cmd.ExecuteReader();
                while (read.Read())
                    temp = read[0].ToString();
                CloseConnect();
                return temp;
            }
            catch { return null; }
        }
        public void setup(string server_ip, string data_name, string user_data, string pass_data)
        {
            serverip = "14.161.1.52";
            dataname = "PTE01";
            userdata = "thangit";
            passdata = "data@pte2018";
        }
    }
}
