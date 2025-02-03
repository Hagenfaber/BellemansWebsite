using System.Net.Mime;
using Api.Controllers.Pages.GetAllPages;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers.Pages;

/// <summary>
/// Controller for managing pages
/// </summary>
[ApiController]
[Route("pages")]
[Produces(MediaTypeNames.Application.Json)]
[Consumes(MediaTypeNames.Application.Json)]
public class PageController : ControllerBase
{
    private readonly IMediator _mediator;

    public PageController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpGet]
    [EndpointName("PagesGetAll")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(GetAllPagesResponse))]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<IResult> GetAll()
    {
        var result = await _mediator.Send(new GetAllPagesQuery());
        return Results.Ok(result);
    }

}