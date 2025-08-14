using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using FilmGadgieCore.Models;

namespace FilmGadgieCore.Controllers;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class MeController : ControllerBase
{
    [HttpGet]
    public ActionResult<GetViewModel> Get()
    {
        // TODO: integrate ASP.NET Core Identity for real user data.
        return new GetViewModel { Hometown = "Unknown" };
    }
}
