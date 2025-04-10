using Api.Controllers.Pages.Shared;
using Domain.Page.repository;
using Shared.Api;

namespace Api.Controllers.Pages.GetAllPages;

public class GetAllPagesHandler : ApiRequestHandler<GetAllPagesQuery, GetAllPagesResponse>
{
    private readonly IPageRepository _pageRepository;

    public GetAllPagesHandler(IPageRepository pageRepository)
    {
        _pageRepository = pageRepository;
    }

    public override async Task<GetAllPagesResponse> Handle(GetAllPagesQuery request, CancellationToken
        cancellationToken)
    {
        var pages = await _pageRepository.GetAllIncludingSections();

        return new GetAllPagesResponse
        {
            Pages = pages.Select(PageResponse.Map)
        };
    }
}