using Shared.Api;

namespace Api.Controllers.Pages.GetPageByName;

public class GetPageByNameQuery : IApiRequest<GetPageByNameResponse>, IApiRequestWithCustomTransactions
{
    public required string Name { get; set; }
}