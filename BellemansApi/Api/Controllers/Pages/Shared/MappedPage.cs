using Domain.Page;
using Domain.Section;

namespace Api.Controllers.Pages.Shared;

public class MappedPage
{
    public string Name { get; set; }
    public string Title { get; set; }
    public List<MappedPageSection> PageSections { get; set; }
    public List<MappedHeaderSection> HeaderSections { get; set; }
    public List<MappedImageSection> ImageSections { get; set; }
}