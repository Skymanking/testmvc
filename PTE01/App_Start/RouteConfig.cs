using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace PTE01
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "report",
                url: "ProposalToBuy/Report1/{year}/{month}",
                defaults: new { controller = "ProposalToBuy", action = "Report1", year = UrlParameter.Optional, month = UrlParameter.Optional }
            );
            routes.MapRoute(
                name: "repor1t",
                url: "ProposalRecruitment/Report1/{year}/{month}",
                defaults: new { controller = "ProposalRecruitment", action = "Report1", year = UrlParameter.Optional, month = UrlParameter.Optional }
            );
            routes.MapRoute(
               name: "editplating",
               url: "Product/EditPlatingOption/{idPro}/{idOpt}/{idLin}",
               defaults: new { controller = "Product", action = "EditPlatingOption", idPro = UrlParameter.Optional, idOpt = UrlParameter.Optional, idLin = UrlParameter.Optional }
           );
            routes.MapRoute(
              name: "delete tool",
              url: "Personal/DeleteTool/{id}",
              defaults: new { controller = "Personal", action = "DeleteTool", id = UrlParameter.Optional }
          );
            routes.MapRoute(
               name: "action",
               url: "{controller}/{action}/{id}",
               defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
           );
        }
    }
}