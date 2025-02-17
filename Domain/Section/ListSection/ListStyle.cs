using Ardalis.SmartEnum;

namespace Domain.Section.ListSection;

public sealed class ListStyle : SmartEnum<ListStyle>
{
    public static readonly ListStyle Icon = new ListStyle(nameof(Icon), 1);
    public static readonly ListStyle Dot = new ListStyle(nameof(Dot), 2);
    public static readonly ListStyle Checkmark = new ListStyle(nameof(Checkmark), 3);
    public static readonly ListStyle Square = new ListStyle(nameof(Square), 4);
    public static readonly ListStyle Diamond = new ListStyle(nameof(Diamond), 5);
    
    private ListStyle(string name, int value) : base(name, value){}
}
