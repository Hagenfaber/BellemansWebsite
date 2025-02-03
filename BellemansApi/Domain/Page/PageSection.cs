using Domain.Section;
using Shared.Domain;

namespace Domain.Page;

public class PageSection : Entity<Guid>
{
    public int Order { get; set; } // Defines sequence

    public PageSection(int order, Guid id)
    {
        Id = id;
        Order = order;
    }
}