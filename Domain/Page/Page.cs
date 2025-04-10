using Domain.Section;
using Domain.Section.ListSection;
using Domain.Section.ServicesSection;
using Shared.Domain;
using Shared.Domain.Validation;

namespace Domain.Page;

public sealed class Page : Entity<Guid>
{
    public string Name { get; private set; }
    public string Title { get; private set; }
    public ICollection<HeaderSection> HeaderSections { get; private set; }
    public ICollection<ImageSection> ImageSections { get; private set; }
    public ICollection<ServicesSection> ServicesSections { get; private set; }
    public ICollection<PageSection> PageSections { get; private set; }
    public ICollection<ListSection> ListSections { get; private set; }

#pragma warning disable CS8618, CS9264
    private Page() { }
#pragma warning restore CS8618, CS9264

    private Page(string name, string title, ICollection<HeaderSection> headerSections,
        ICollection<ImageSection> imageSections, ICollection<ServicesSection> servicesSections,
        ICollection<PageSection> pageSections, ICollection<ListSection> listSections)
    {
        Id = Guid.CreateVersion7();
        Name = name;
        Title = title;
        HeaderSections = headerSections;
        ImageSections = imageSections;
        ServicesSections = servicesSections;
        PageSections = pageSections;
        ListSections = listSections;
    }

    public static Result<Page> Create(string name, string title, ICollection<HeaderSection> headerSections,
        ICollection<ImageSection> imageSections, ICollection<ServicesSection> servicesSections,
        ICollection<PageSection> pageSections, ICollection<ListSection> listSections)
    {
        if (string.IsNullOrWhiteSpace(name))
            return Result.Error(TranslationKeys.NameCannotBeEmpty);

        return new Page(name, title, headerSections, imageSections, servicesSections, pageSections, listSections);
    }
}