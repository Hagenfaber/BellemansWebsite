namespace Domain.Page;

public class Page
{
    public int Id { get; set; }
    public string Title { get; set; }

    public ICollection<PageSection> PageSections { get; set; }
}