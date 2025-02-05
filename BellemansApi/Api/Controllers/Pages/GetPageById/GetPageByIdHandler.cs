
using Api.Controllers.Pages.GetPageById;
using Api.Controllers.Pages.Shared;
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
        var page = await _pageRepository.GetById(request.Id);

        return new GetPageByIdResponse
        {
            Page = PageResponse.Map(page)
        };
    }
}