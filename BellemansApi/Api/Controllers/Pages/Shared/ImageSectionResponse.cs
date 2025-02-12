using Domain.Page;
using Domain.Section;

namespace Api.Controllers.Pages.Shared;

public class ImageSectionResponse
{
    public required Guid Id { get; set; }
    public required string ImageUrl { get; set; }
    public required int Order { get; set; }
    
    public static ImageSectionResponse Map(ImageSection imageSection, IEnumerable<PageSection> pageSections)
    {
        return new ImageSectionResponse
        {
            Id = imageSection.Id,
            Order = pageSections.FirstOrDefault(ps => ps.Id == imageSection.Id)!.Order,
            ImageUrl = imageSection.ImageUrl,
        };
    }

}