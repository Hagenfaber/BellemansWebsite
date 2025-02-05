using Shared.Domain;

namespace Domain.Page.repository;

public interface IPageRepository : IRepository<Page, string>
{
    Task<List<Page>> GetAllIncludingSections();
    Task<Page?> GetById(string id);
}