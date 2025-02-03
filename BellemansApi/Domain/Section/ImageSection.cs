using Shared.Domain;

namespace Domain.Section;

public class ImageSection : Entity<Guid>
{
    public string ImageUrl { get; set; }
}