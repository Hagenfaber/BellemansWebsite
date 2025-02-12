using Domain.Components;
using Shared.Domain;
using Shared.Domain.Validation;

namespace Domain.Section;

public sealed class HeaderSection : Entity<Guid>
{
    public string Title { get; private set; }
    public string Description { get; private set; }
    public Link PrimaryCallToAction { get; private set; }
    public Link SecondaryCallToAction { get; private set; }

    #pragma warning disable CS8618, CS9264
    private HeaderSection() { } // required by ef core for contruction of owned navigation properties
    #pragma warning restore CS8618, CS9264

    private HeaderSection(string title, string description, Link primaryCallToAction, Link secondaryCallToAction)
    {
        Id = Guid.CreateVersion7();
        Title = title;
        Description = description;
        PrimaryCallToAction = primaryCallToAction;
        SecondaryCallToAction = secondaryCallToAction;
    }

    public static Result<HeaderSection> Create(string title, string description, Link primaryCallToAction,
        Link secondaryCallToAction)
    {
        return new HeaderSection(title, description, primaryCallToAction, secondaryCallToAction);
    }
}