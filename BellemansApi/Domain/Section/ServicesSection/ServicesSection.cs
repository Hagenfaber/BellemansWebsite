using Shared.Domain;
using Shared.Domain.Validation;

namespace Domain.Section.ServicesSection;

public class ServicesSection : Entity<Guid>
{
    public string Title { get; set; }
    public CallToActionSubSection FirstCallToActionSubSection { get; set; }
    public CallToActionSubSection SecondCallToActionSubSection { get; set; }
    
    #pragma warning disable CS8618, CS9264
    private ServicesSection() { }
    #pragma warning restore CS8618, CS9264
    
    private ServicesSection(string title, CallToActionSubSection firstCallToActionSubSection, CallToActionSubSection secondCallToActionSubSection)
    {
        Title = title;
        FirstCallToActionSubSection = firstCallToActionSubSection;
        SecondCallToActionSubSection = secondCallToActionSubSection;
    }

    public static Result<ServicesSection> Create(string title, CallToActionSubSection firstCallToActionSubSection, CallToActionSubSection secondCallToActionSubSection)
    {
        return new ServicesSection(title, firstCallToActionSubSection, secondCallToActionSubSection);
    }
}