using Domain.Page;
using Domain.Page.repository;
using Shared.Database;

namespace Database.Repositories;

public class PageRepository
    : EntityFrameworkRepository<Page, string, BellemansDbContext>, IPageRepository
{
    public PageRepository(ICustomDbContextFactory<BellemansDbContext> dbContextFactory)
        : base(dbContextFactory)
    {
    }

}