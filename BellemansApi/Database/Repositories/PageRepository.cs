using Domain.Page;
using Domain.Page.repository;
using Microsoft.EntityFrameworkCore;
using Shared.Database;

namespace Database.Repositories;

public class PageRepository
    : EntityFrameworkRepository<Page, Guid, BellemansDbContext>, IPageRepository
{
    public PageRepository(ICustomDbContextFactory<BellemansDbContext> dbContextFactory)
        : base(dbContextFactory)
    {
    }

    public Task<List<Page>> GetAllIncludingSections()
    {
        return Set
            .Include(p => p.PageSections)
            .Include(p => p.HeaderSections)
            .Include(p=> p.ImageSections)
            .Include(p => p.ServicesSections)
            .ToListAsync();
    }
    
    public new Task<Page?> Get(Guid id)
    {
        return Set
            .Include(p => p.PageSections)
            .Include(p => p.HeaderSections)
            .Include(p=> p.ImageSections)
            .Include(p => p.ServicesSections)
            .Where(p => p.Id == id)
            .FirstOrDefaultAsync();
    }
}