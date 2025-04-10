using System.Collections.ObjectModel;
using Shared.Domain;
using Shared.Domain.Validation;

namespace Domain.Section.ListSection;

public sealed class ListSection : Entity<Guid>
{
    public string Title { get; private set; }
    public string? Description { get; private set; }
    public ListStyle Style { get; private set; }
    private readonly List<ListItem> _items = [];
    public IReadOnlyCollection<ListItem> Items => new ReadOnlyCollection<ListItem>(_items);

    private ListSection(string title, string? description, ListStyle style)
    {
        Id = Guid.CreateVersion7();
        Title = title;
        Description = description;
        Style = style;
    }

    public static Result<ListSection> Create(string title, string? description, ListStyle style)
    {
        return new ListSection(title, description, style);
    }

    public void UpdateStyle(ListStyle style)
    {
        Style = style;
    }
    
    public void AddItem(ListItem item)
    {
        _items.Add(item);
    }

    public Result RemoveItem(Guid itemId)
    {
        var itemToRemove = _items.SingleOrDefault(item => item.Id == itemId);
        if (itemToRemove is null)
            return Result.Error(TranslationKeys.ListItemNotFound);

        _items.Remove(itemToRemove);
        return Result.Ok();
    }
}
