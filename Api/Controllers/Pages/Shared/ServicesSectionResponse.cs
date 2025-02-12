using Domain.Page;
using Domain.Section.ServicesSection;

namespace Api.Controllers.Pages.Shared;

public class ServicesSectionResponse
{
    public required Guid Id { get; set; }
    public required int Order { get; set; }
    public required string Title { get; set; }
    public required CallToActionSubSectionResponse FirstCallToActionSubSectionResponse { get; set; }
    public required CallToActionSubSectionResponse SecondCallToActionSubSectionResponse { get; set; }
    
    public static ServicesSectionResponse Map(ServicesSection servicesSection, IEnumerable<PageSection> pageSections)
    {
        return new ServicesSectionResponse
        {
            Id = servicesSection.Id,
            Order = pageSections.First(ps => ps.Id == servicesSection.Id).Order,
            Title = servicesSection.Title,
            FirstCallToActionSubSectionResponse = CallToActionSubSectionResponse.Map(servicesSection.FirstCallToActionSubSection),
            SecondCallToActionSubSectionResponse = CallToActionSubSectionResponse.Map(servicesSection.SecondCallToActionSubSection)
        };
    }
}