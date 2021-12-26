using System.IO;
using API.Controllers.Base;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiExplorerSettings(IgnoreApi = true)]
    public class FallbackController: BaseApiController
    {
        public ActionResult Index()
        {
            return PhysicalFile(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "index.html"), "text/HTML");
        }
    }
}