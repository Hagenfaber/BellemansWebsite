using Domain.Page;

namespace Api.Controllers.Pages.Shared;

public struct PageResponse
{
    public required string Name { get; set; }
    public required string Title { get; set; }
    public required ICollection<PageSection> PageSections { get; set; }

    public static PageResponse Map(Page page)
    {
        return new PageResponse
        {
            Name = page.Id,
            Title = page.Title,
            PageSections = page.PageSections
        };
    }

}