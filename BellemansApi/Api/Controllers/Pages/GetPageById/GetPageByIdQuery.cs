using Microsoft.AspNetCore.Mvc;
using Shared.Api;

namespace Api.Controllers.Pages.GetPageById;

public class GetPageByIdQuery : IApiRequest<GetPageByIdResponse>, IApiRequestWithCustomTransactions
{
    public Guid Id { get; set; }
}