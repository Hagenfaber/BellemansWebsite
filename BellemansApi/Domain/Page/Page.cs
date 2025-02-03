using Shared.Domain;
using Shared.Domain.Validation;

namespace Domain.Page;

public sealed class Page : Entity<string>
{
    public string Title { get; private set; }
    public ICollection<PageSection> PageSections { get; set; }

    private Page(){}

    private Page(string id, string title, ICollection<PageSection> pageSections)
    {
        Id = id;
        Title = title;
        PageSections = pageSections;
    }

    public static Result<Page> Create(string name, string title, ICollection<PageSection> pageSections)
    {
        if (string.IsNullOrWhiteSpace(name))
            return Result.Error(TranslationKeys.NameCannotBeEmpty);

        return new Page(name, title, pageSections);
    }
}