using Domain.Section;

namespace Domain.Page;

public class PageSection
{
    public int PageId { get; set; }
    public Page Page { get; set; }

    public int SectionId { get; set; }
    public BaseSection Section { get; set; }

    public int Order { get; set; } // Defines sequence
}