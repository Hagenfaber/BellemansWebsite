using Domain.Section;
using Shared.Domain;
using Shared.Domain.Validation;

namespace Domain.Page;

public sealed class PageSection : Entity<Guid>
{
    public int Order { get; private set; } // Defines sequence

    private PageSection(int order)
    {
        Id = Guid.CreateVersion7();
        Order = order;
    }

    public static Result<PageSection> Create(int order)
    {
        return new PageSection(order);
    }
}