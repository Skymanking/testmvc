﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using Model.Code;

namespace ShopOnline1.Areas.Admin.Controllers
{
    public class BaseController : Controller
    {
        //
        // GET: /Admin/Base/

        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            var session = (UserLogin)Session[CommonConstants.USER_SESSION];
            if (session == null)
            {
                filterContext.Result = new RedirectToRouteResult(new
                    RouteValueDictionary(new { controller = "Login", action = "Index", }));
            }
            base.OnActionExecuting(filterContext);
        }

    }
}
