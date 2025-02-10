using Shared.Domain;

namespace Domain.Page.repository;

public interface IPageRepository : IRepository<Page, Guid>
{
    Task<List<Page>> GetAllIncludingSections();
}