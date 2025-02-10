using Domain.Page;

namespace Api.Controllers.Pages.Shared;

public class PageSectionResponse
{
    public required Guid Id { get; set; } // Unique identifier
    public required int Order { get; set; } // Defines sequence
    
    public static PageSectionResponse Map(PageSection pageSection)
    {
        return new PageSectionResponse
        {
            Id = pageSection.Id,
            Order = pageSection.Order,
        };
    }
}