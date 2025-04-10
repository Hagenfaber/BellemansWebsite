using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.Extensions.Logging;

namespace Database;

public interface IMigrationService
{
  void Destroy(BellemansDbContext dbContext);
  void Revert(BellemansDbContext dbContext);
  void Migrate(BellemansDbContext dbContext);
  void RevertAndMigrate(BellemansDbContext dbContext);
}

public class MigrationService : IMigrationService
{
  private readonly ILogger<MigrationService> _logger;

  public MigrationService(ILogger<MigrationService> logger)
  {
    _logger = logger;
  }

  public void Destroy(BellemansDbContext dbContext)
  {
    _logger.LogWarning("Destroying database.");
    dbContext.Database.EnsureDeleted();
  }

  public void Revert(BellemansDbContext dbContext)
  {
    _logger.LogWarning("Reverting migrations.");
    dbContext.GetService<IMigrator>().Migrate("0");
  }

  public void Migrate(BellemansDbContext dbContext)
  {
    _logger.LogInformation("Applying migrations.");
    dbContext.Database.Migrate();
  }

  public void RevertAndMigrate(BellemansDbContext dbContext)
  {
    Revert(dbContext);
    Migrate(dbContext);
  }
}
