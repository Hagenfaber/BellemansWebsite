
using Api.Controllers.Pages.GetPageById;
using Api.Controllers.Pages.Shared;
using Domain;
using Domain.Page.repository;
using Shared.Api;

namespace Api.Controllers.Pages.GetPageById;

public class GetPageByIdHandler : ApiRequestHandler<GetPageByIdQuery, GetPageByIdResponse>
{
    private readonly IPageRepository _pageRepository;

    public GetPageByIdHandler(IPageRepository pageRepository)
    {
        _pageRepository = pageRepository;
    }

    public override async Task<GetPageByIdResponse> Handle(GetPageByIdQuery request, CancellationToken
        cancellationToken)
    {
        var page = await _pageRepository.Get(request.Id);
        if (page is null)
            throw new ProblemDetailsException(TranslationKeys.PageNotFound);
        
        return new GetPageByIdResponse
        {
            Page = PageResponse.Map(page)
        };
    }
}