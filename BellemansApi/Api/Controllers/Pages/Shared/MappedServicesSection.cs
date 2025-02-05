using Domain.Section.ServicesSection;

namespace Api.Controllers.Pages.Shared;

public class MappedServicesSection
{
    public Guid Id { get; set; }
    public int Order { get; set; }
    public string Title { get; set; }
    public MappedCallToActionSubSection FirstCallToActionSubSection { get; set; }
    public MappedCallToActionSubSection SecondCallToActionSubSection { get; set; }
}