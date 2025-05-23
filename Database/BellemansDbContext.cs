﻿using Microsoft.EntityFrameworkCore;
using SmartEnum.EFCore;

namespace Database;

/// <summary>
/// The DbContext for the data layer
/// </summary>
/// <param name="options"></param>
public class BellemansDbContext : DbContext
{
  public const string DefaultSchema = "Bellemans";

  public BellemansDbContext(DbContextOptions options) : base(options)
  { }

  // add dbsets here

  /// <summary>
  /// Configure the model that was discovered by convention from the entity types exposed in <see cref="DbSet{TEntity}"/> properties on this context.
  /// </summary>
  /// <param name="modelBuilder"></param>
  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    modelBuilder.HasDefaultSchema(DefaultSchema);
    modelBuilder.ApplyConfigurationsFromAssembly(typeof(BellemansDbContext).Assembly);
  }
  
  protected override void ConfigureConventions(ModelConfigurationBuilder configurationBuilder)
  {
    configurationBuilder.ConfigureSmartEnum();
  }
}
