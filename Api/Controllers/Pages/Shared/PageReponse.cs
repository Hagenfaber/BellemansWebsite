using Domain.Page;

namespace Api.Controllers.Pages.Shared;

public class PageResponse
{
    public required Guid Id { get; set; }
    public required string Name { get; set; }
    public required string Title { get; set; }
    public required IEnumerable<PageSectionResponse> PageSections { get; set; }
    public required IEnumerable<HeaderSectionResponse> HeaderSections { get; set; }
    public required IEnumerable<ImageSectionResponse> ImageSections { get; set; }
    public required IEnumerable<ServicesSectionResponse> ServicesSections { get; set; }
    public required IEnumerable<ListSectionResponse> ListSections { get; set; }

    public static PageResponse Map(Page page)
    {
        return new PageResponse
        {
            Id = page.Id,
            Name = page.Name,
            Title = page.Title,
            PageSections = page.PageSections.Select(ps => PageSectionResponse.Map(ps)),
            HeaderSections = page.HeaderSections.Select(hs => HeaderSectionResponse.Map(hs, page.PageSections)),
            ImageSections = page.ImageSections.Select(imageSection => ImageSectionResponse.Map(imageSection, page.PageSections)),
            ServicesSections = page.ServicesSections.Select(servicesSection => ServicesSectionResponse.Map(servicesSection, page.PageSections)),
            ListSections = page.ListSections.Select(listSection => ListSectionResponse.Map(listSection, page.PageSections)),
        };
    }
}