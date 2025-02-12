using Domain.Components;

namespace Api.Controllers.Pages.Shared;

public class CallToActionResponse
{
    public required string Url { get; set; }
    public required string Text { get; set; }

    public static CallToActionResponse Map(Link callToAction)
    {
        return new CallToActionResponse()
        {

            Url = callToAction.Url,
            Text = callToAction.Text,
        };
    }
}