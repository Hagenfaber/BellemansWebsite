using Api.Controllers.Pages.Shared;

namespace Api.Controllers.Pages.GetAllPages;

public struct GetAllPagesResponse
{
    public required IEnumerable<PageResponse> Pages { get; set; }
}