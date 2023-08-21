using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;


namespace PTEApp
{
    public partial class WELLCOME1 : Form
    {
        public WELLCOME1()
        {
            InitializeComponent();
        }
        DataAccessy.D_MEETING bu = new DataAccessy.D_MEETING();
        private void label1_Click(object sender, EventArgs e)
        {

        }
        public string thongbao;
        public string thoigian;
        public bool tonho =false;


        private void timer2_Tick(object sender, EventArgs e)
        {
            DateTime now = DateTime.Now;
            try
            {
                DataTable temp = bu.Wellcome1(1, now);
                if (temp.Rows.Count > 0)
                {
                    thongbao = temp.Rows[0]["CustomerName"].ToString();
                    thoigian = Convert.ToDateTime(temp.Rows[0]["TimeFrom"].ToString()).ToString("dd/MM/yyyy") + " - (" + Convert.ToDateTime(temp.Rows[0]["TimeFrom"].ToString()).ToString("hh:mm") + " - " + Convert.ToDateTime(temp.Rows[0]["TimeTo"].ToString()).ToString("hh:mm") + ")";
                }
                else
                { thongbao = ""; }


                if (thongbao != "")
                {
                    this.Show();
                }
                else
                {
                    this.Hide();
                }
            }
            catch { thongbao = "can't connect Server"; }
            int dauphay = thongbao.IndexOf(",");
            if (dauphay != -1)
            {
                label1.Text = thongbao.Substring(0, dauphay).ToUpper();
                label2.Text = thongbao.Substring(dauphay + 1, thongbao.Length - label1.Text.Length - 1);
            }
            else
            {
                label1.Text = thongbao.ToUpper();
                label2.Text = "";
            }
            label3.Text = thoigian;

        }

        private void WELLCOME1_Load(object sender, EventArgs e)
        {

            getWelcomeInfo();


        }
        void getWelcomeInfo()
        {
            label1.Width = this.Width;
            DateTime now = DateTime.Now;
            try
            {
                DataTable temp = bu.Wellcome1(1, now);
                if (temp.Rows.Count > 0)
                {
                    thongbao = temp.Rows[0]["CustomerName"].ToString();
                    thoigian = Convert.ToDateTime(temp.Rows[0]["TimeFrom"].ToString()).ToString("dd/MM/yyyy") + " - (" + Convert.ToDateTime(temp.Rows[0]["TimeFrom"].ToString()).ToString("hh:mm") + " - " + Convert.ToDateTime(temp.Rows[0]["TimeTo"].ToString()).ToString("hh:mm") + ")";
                }
                else
                { thongbao = ""; }
            }
            catch { thongbao = "can't connect Server"; }
            int dauphay = thongbao.IndexOf(",");
            if (dauphay != -1)
            {
                label1.Text = thongbao.Substring(0, dauphay).ToUpper();
                label2.Text = thongbao.Substring(dauphay + 1, thongbao.Length - label1.Text.Length - 1);
            }
            else
            {
                label1.Text = thongbao.ToUpper();
                label2.Text = "";
            }
            label3.Text = thoigian;

            label1.Visible = true;
        }

    }
}
