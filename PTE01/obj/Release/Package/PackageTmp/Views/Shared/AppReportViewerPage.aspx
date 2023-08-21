
<%@ Page Language="C#" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>
<%@ Register Assembly="Microsoft.ReportViewer.WebForms, Version=11.0.0.0, Culture=neutral, PublicKeyToken=89845dcd8080cc91" Namespace="Microsoft.Reporting.WebForms" TagPrefix="rsweb" %>


<!DOCTYPE html>
<html>
<head runat="server">
    <meta name="viewport" content="width=device-width" />
    <title>ReportViwer in MVC4 Application</title>    
    <script runat="server">
        void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                IEnumerable<Model.View.Personal3> customers = null;
                    customers = new Model.Dao.PersonalDao().GroupID299();
                    ReportViewer1.LocalReport.ReportPath = Server.MapPath("~/RP/Report2.rdlc");
                    ReportViewer1.LocalReport.DataSources.Clear();
                    ReportDataSource rdc = new ReportDataSource("DataSet1", customers);
                    ReportViewer1.LocalReport.DataSources.Add(rdc);
                    ReportViewer1.ShowPrintButton = true;
                    ReportViewer1.LocalReport.Refresh();
                   
            }
        }
    </script>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:ScriptManager ID="ScriptManager1" runat="server" EnablePageMethods="True"></asp:ScriptManager>
        <rsweb:ReportViewer ID="ReportViewer1" runat="server" AsyncRendering="false" SizeToReportContent="true" Height="1200px" Width="900px">
        </rsweb:ReportViewer>        
    </div>
    </form>
</body>
</html>