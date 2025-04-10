using Domain.Section.ServicesSection;

namespace Api.Controllers.Pages.Shared;

public class CallToActionSubSectionResponse
{
    public required string Title { get; set; }
    public required string Description { get; set; }
    public required CallToActionResponse CallToActionResponse { get; set; }

    public static CallToActionSubSectionResponse Map(CallToActionSubSection callToActionSubSection)
    {
        return new CallToActionSubSectionResponse()
        {
            Title = callToActionSubSection.Title,
            Description = callToActionSubSection.Description,
            CallToActionResponse = CallToActionResponse.Map(callToActionSubSection.CallToAction),
        };
    }
    
}