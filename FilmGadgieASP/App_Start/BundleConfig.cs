using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Optimization;

namespace FilmGadgieASP
{
    public class BundleConfig
    {
        public static string appDir = "app";
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                "~/bower_components/jquery/dist/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                "~/bower_components/jquery-validation-unobtrusive/jquery.unobtrusive*",
                "~/bower_components/jquery-validation/dist/jquery.validate*"));


            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                "~/bower_components/bootstrap/dist/js/bootstrap.js",
                "~/bower_components/respond/dest/js/respond.js"));


            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/bower_components/bootstrap/dist/css/bootstrap.css",
                 "~/Content/Site.css"));


            //js bundles
            bundles.Add(
                new ScriptBundle("~/bundles/angular").Include(
                    "~/Scripts/angular.js",
                    "~/Scripts/angular-route.js",
                    "~/Scripts/angular-animate.js",
                    "~/Scripts/angular-sanitize.js",
                    "~/Scripts/angular-ui/ui-bootstrap-tpls.js"
                ));


            bundles.Add(
                new ScriptBundle("~/bundles/appScripts")
                    .Include($"~/{appDir}/app.js")
                    .IncludeDirectory($"~/{appDir}", "*.js", true));


#if DEBUG || TEST
            BundleTable.EnableOptimizations = false;
#else
            BundleTable.EnableOptimizations = true;
#endif


        }
    }
}
