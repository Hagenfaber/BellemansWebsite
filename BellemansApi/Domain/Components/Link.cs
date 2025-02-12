using Shared.Domain.Validation;

namespace Domain.Components;

public class Link
{
    public string Url { get; set; }
    public string Text { get; set; }

    private Link(string url, string text)
    {
        Url = url;
        Text = text;
    }

    public static Result<Link> Create(string url, string text)
    {
        return new Link(url, text);
    }
}