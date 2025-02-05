using Shared.Domain;

namespace Domain.Section.ServicesSection;

public class ServicesSection : Entity<Guid>
{
    public string Title { get; set; }
    public CallToActionSubSection FirstCallToActionSubSection { get; set; }
    public CallToActionSubSection SecondCallToActionSubSection { get; set; }
}