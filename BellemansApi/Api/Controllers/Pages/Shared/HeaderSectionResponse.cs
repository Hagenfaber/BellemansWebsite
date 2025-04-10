using Domain.Page;
using Domain.Section;

namespace Api.Controllers.Pages.Shared;

public class HeaderSectionResponse
{
    public required Guid Id { get; set; }
    public required string Title { get; set; }
    public required string Description { get; set; }
    public required int Order { get; set; }
    public required CallToActionResponse PrimaryCallToActionResponse { get; set; }
    public required CallToActionResponse SecondaryCallToActionResponse { get; set; }
    
    public static HeaderSectionResponse Map(HeaderSection headerSection, IEnumerable<PageSection> pageSections)
    {
        return new HeaderSectionResponse
        {
            Id = headerSection.Id,
            Order = pageSections.FirstOrDefault(ps => ps.Id == headerSection.Id)!.Order,
            Title = headerSection.Title,
            Description = headerSection.Description,
            PrimaryCallToActionResponse = CallToActionResponse.Map(headerSection.SecondaryCallToAction),
            SecondaryCallToActionResponse = CallToActionResponse.Map(headerSection.SecondaryCallToAction)
        };
    }
}