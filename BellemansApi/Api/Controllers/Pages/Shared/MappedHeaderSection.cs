namespace Api.Controllers.Pages.Shared;

public class MappedHeaderSection
{
    public Guid Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public int Order { get; set; }
    public MappedCallToAction PrimaryCallToAction { get; set; }
    public MappedCallToAction SecondaryCallToAction { get; set; }
}