using Shared.Domain;

namespace Domain.Page.repository;

public interface IPageRepository : IRepository<Page, Guid>
{
    Task<List<Page>> GetAllBasic();
    Task<List<Page>> GetAllIncludingSections();
    Task<Page?> GetByName(string name);
}