using Api.Controllers.Pages.Shared;
using Domain;
using Domain.Page.repository;
using Shared.Api;

namespace Api.Controllers.Pages.GetPageByName;

public class GetPageByNameHandler : ApiRequestHandler<GetPageByNameQuery, GetPageByNameResponse>
{
    private readonly IPageRepository _pageRepository;

    public GetPageByNameHandler(IPageRepository pageRepository)
    {
        _pageRepository = pageRepository;
    }

    public override async Task<GetPageByNameResponse> Handle(GetPageByNameQuery request, CancellationToken
        cancellationToken)
    {
        var page = await _pageRepository.GetByName(request.Name);
        if (page is null)
            throw new ProblemDetailsException(TranslationKeys.PageNotFound);
        
        return new GetPageByNameResponse
        {
            Page = PageResponse.Map(page)
        };
    }
}