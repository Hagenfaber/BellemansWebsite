using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore.Diagnostics;
using Microsoft.Extensions.Logging;
using Shared.Database;

namespace Database;

/// <summary>
/// Creates a new <see cref="DbContext"/> or uses an active one for the active tenant
/// </summary>
public class BellemansDbContextFactory : ICustomDbContextFactory<BellemansDbContext>
{
  private readonly string _connectionString;
  private BellemansDbContext? _dbContext;

  public BellemansDbContextFactory(string connectionString)
  {
    _connectionString = connectionString;
    _dbContext = CreateDbContext();
  }

  public BellemansDbContext CreateDbContext()
  {
    if (_dbContext is null)
      _dbContext = CreateNew();

    return _dbContext;
  }

  public BellemansDbContext CreateNew()
  {
    var dbOptions = new DbContextOptionsBuilder()
      .UseNpgsql(_connectionString,
          options =>
          {
            options.MigrationsAssembly(typeof(BellemansDbContextFactory).Assembly.FullName);
            options.MigrationsHistoryTable("Migrations", BellemansDbContext.DefaultSchema);
          })
      .EnableSensitiveDataLogging()
      .LogTo(Console.WriteLine, (eventId, logLevel) => logLevel >= LogLevel.Information
                                                       || eventId == RelationalEventId.DataReaderDisposing);

    _dbContext = new BellemansDbContext(dbOptions.Options);

    return _dbContext;
  }

  public void Dispose()
  {
    if (_dbContext is not null)
      _dbContext.Dispose();
  }

  public async ValueTask DisposeAsync()
  {
    if (_dbContext != null)
      await _dbContext.DisposeAsync();
  }
}
