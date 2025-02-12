using Shared.Domain;
using Shared.Domain.Validation;

namespace Domain.Section;

public sealed class ImageSection : Entity<Guid>
{
    public string ImageUrl { get; private set; }

    private ImageSection(string imageUrl)
    {
        Id = Guid.CreateVersion7();
        ImageUrl = imageUrl;
    }

    public static Result<ImageSection> Create(string imageUrl)
    {
        if (string.IsNullOrWhiteSpace(imageUrl))
            return Result.Error(TranslationKeys.ImageUrlCannotBeEmpty);
        
        return new ImageSection(imageUrl);
    }
    
}