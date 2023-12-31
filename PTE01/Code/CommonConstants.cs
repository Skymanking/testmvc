﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Model.Code
{
    public static class CommonConstants
    {
        public static string USER_SESSION = "USER_SESSION";
        public static string SESSION_CREDENTIALS = "SESSION_CREDENTIALS";
        public static string CartSession = "CartSession";
        public static string FOLDERPATH_SESSION = "FOLDERPATH_SESSION";
        public static string MEMBER_GROUP = "MEMBER";
        public static string ADMIN_GROUP = "ADMIN";
        public static string MOD_GROUP = "MOD";
        public static string CurrentCulture { set; get; }
        public static string CurrentLink { set; get; }
    }
}