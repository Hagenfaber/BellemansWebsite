using Shared.Domain;
using Shared.Domain.Validation;

namespace Domain.Section.ListSection;

public sealed class ListItem : Entity<Guid>
{
    public string Title { get; private set; }
    public string? Description { get; private set; }
    
    private ListItem(string title, string? description)
    {
        Id = Guid.CreateVersion7();
        Title = title;
        Description = description;
    }

    public static Result<ListItem> Create(string title, string? description)
    {
        return new ListItem(title, description);
    }
} 