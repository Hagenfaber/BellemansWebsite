using Domain.Section;
using Domain.Section.ServicesSection;
using Shared.Domain;
using Shared.Domain.Validation;

namespace Domain.Page;

public sealed class Page : Entity<string>
{
    public string Title { get; private set; }
    public ICollection<HeaderSection> HeaderSections { get; set; }
    public ICollection<ImageSection> ImageSections { get; set; }
    public ICollection<ServicesSection> ServicesSections { get; set; }
    public ICollection<PageSection> PageSections { get; set; }

    private Page(){}

    private Page(string id, string title, ICollection<HeaderSection> headerSections, ICollection<ImageSection> imageSections, ICollection<PageSection> pageSections)
    {
        Id = id;
        Title = title;
        HeaderSections = headerSections;
        ImageSections = imageSections;
        PageSections = pageSections;
    }

    public static Result<Page> Create(string name, string title, ICollection<HeaderSection> headerSections, ICollection<ImageSection> imageSections, ICollection<PageSection> pageSections)
    {
        if (string.IsNullOrWhiteSpace(name))
            return Result.Error(TranslationKeys.NameCannotBeEmpty);

        return new Page(name, title, headerSections, imageSections, pageSections);
    }
}