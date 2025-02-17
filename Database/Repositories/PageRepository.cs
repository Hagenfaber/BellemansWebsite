using Domain.Page;
using Domain.Page.repository;
using Microsoft.EntityFrameworkCore;
using Shared.Database;

namespace Database.Repositories;

public static class PageQueryableExtensions
{
    public static IQueryable<Page> AddAllIncludes(this IQueryable<Page> query)
    {
        // TODO: might need to add a few 'ThenInclude' items here
        return query.Include(p => p.PageSections)
            .Include(p => p.HeaderSections)
            .Include(p => p.ImageSections)
            .Include(p => p.ServicesSections)
            .Include(p => p.ListSections);
    }
}

public class PageRepository
    : EntityFrameworkRepository<Page, Guid, BellemansDbContext>, IPageRepository
{
    public PageRepository(ICustomDbContextFactory<BellemansDbContext> dbContextFactory)
        : base(dbContextFactory)
    {
    }

    public Task<List<Page>> GetAllBasic()
    {
        return Set
            .TagWith(nameof(PageRepository) + "." + nameof(GetAllBasic))
            .IgnoreAutoIncludes()
            .ToListAsync();    
    }

    public Task<List<Page>> GetAllIncludingSections()
    {
        return Set
            .TagWith(nameof(PageRepository) + "." + nameof(GetAllIncludingSections))
            .AddAllIncludes()
            .ToListAsync();
    }

    public Task<Page?> GetByName(string name)
    {
        return Set
            .TagWith(nameof(PageRepository) + "." + nameof(GetByName))
            .AddAllIncludes()
            .Where(p => p.Name == name)
            .FirstOrDefaultAsync();
    }

    public new Task<Page?> Get(Guid id)
    {
        return Set
            .TagWith(nameof(PageRepository) + "." + nameof(Get))
            .AddAllIncludes()
            .Where(p => p.Id == id)
            .FirstOrDefaultAsync();
    }
}