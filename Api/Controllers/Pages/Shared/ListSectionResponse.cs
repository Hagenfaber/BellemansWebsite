using Ardalis.SmartEnum;
using Domain.Page;
using Domain.Section.ListSection;

namespace Api.Controllers.Pages.Shared;

public class ListSectionResponse
{
    public required Guid Id { get; set; }
    public required int Order { get; set; }
    public required string Title { get; set; }
    public string? Description { get; set; }
    public required ListStyleResponse Style { get; set; }
    
    public static ListSectionResponse Map(ListSection listSection, IEnumerable<PageSection> pageSections)
    {
        return new ListSectionResponse
        {
            Id = listSection.Id,
            Order = pageSections.First(ps => ps.Id == listSection.Id).Order,
            Title = listSection.Title,
            Description = listSection.Description,
            Style = ListStyleResponse.Map(listSection.Style)
        };
    }
}

public sealed class ListStyleResponse : SmartEnum<ListStyleResponse>
{
    public static readonly ListStyleResponse Icon = new ListStyleResponse(nameof(Icon), 1);
    public static readonly ListStyleResponse Dot = new ListStyleResponse(nameof(Dot), 2);
    public static readonly ListStyleResponse Checkmark = new ListStyleResponse(nameof(Checkmark), 3);
    public static readonly ListStyleResponse Square = new ListStyleResponse(nameof(Square), 4);
    public static readonly ListStyleResponse Diamond = new ListStyleResponse(nameof(Diamond), 5);
    
    private ListStyleResponse(string name, int value) : base(name, value){}

    public static ListStyleResponse Map(ListStyle listStyle)
    {
        return FromName(listStyle.Name);
    }
}


public class ListItemResponse
{
    public required Guid Id { get; set; }
    public required string Title { get; set; }
    public string? Description { get; set; }

    public static ListItemResponse Map(ListItem item)
    {
        return new ListItemResponse()
        {
            Id = item.Id,
            Title = item.Title,
            Description = item.Description,
        };
    }
}