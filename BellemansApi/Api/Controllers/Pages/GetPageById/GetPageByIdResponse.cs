using Api.Controllers.Pages.Shared;

namespace Api.Controllers.Pages.GetPageById;

public struct GetPageByIdResponse
{
    public required PageResponse Page { get; set; }
}