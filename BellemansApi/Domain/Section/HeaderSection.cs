using Shared.Domain;

namespace Domain.Section;

public class HeaderSection : Entity<Guid>
{
    public string Title { get; set; }
    public string Description { get; set; }
}