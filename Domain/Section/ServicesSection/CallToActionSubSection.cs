using Domain.Components;
using Shared.Domain.Validation;

namespace Domain.Section.ServicesSection;

public class CallToActionSubSection
{
    public string Title { get; private set; }
    public string Description { get; private set; }
    public Link CallToAction { get; private set; }

    #pragma warning disable CS8618, CS9264
    private CallToActionSubSection() { }
    #pragma warning restore CS8618, CS9264
    
    private CallToActionSubSection(string title, string description, Link callToAction)
    {
        Title = title;
        Description = description;
        CallToAction = callToAction;
    }

    public static Result<CallToActionSubSection> Create(string title, string description, Link callToAction)
    {
        return new CallToActionSubSection(title, description, callToAction);
    }
}