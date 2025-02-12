using Api.Controllers.Pages.Shared;

namespace Api.Controllers.Pages.GetPageByName;

public struct GetPageByNameResponse
{
    public required PageResponse Page { get; set; }
}