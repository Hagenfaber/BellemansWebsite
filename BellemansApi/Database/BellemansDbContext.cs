using Domain.Page;
using Domain.Section;
using Microsoft.EntityFrameworkCore;

namespace Database;

/// <summary>
/// The DbContext for the data layer
/// </summary>
/// <param name="options"></param>
public class BellemansDbContext : DbContext
{
  public const string DefaultSchema = "Bellemans";
  
  public DbSet<Page> Pages { get; set; }
  public DbSet<BaseSection> Sections { get; set; }
  public DbSet<HeaderSection> HeaderSections { get; set; }
  public DbSet<PageSection> PageSections { get; set; }

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
    
    modelBuilder.Entity<HeaderSection>().ToTable("HeaderSections");
    
    // Configure PageSection as a join table
    modelBuilder.Entity<PageSection>()
      .HasKey(ps => new { ps.PageId, ps.SectionId }); // Composite key
    
    modelBuilder.Entity<PageSection>()
      .HasOne(ps => ps.Page)
      .WithMany(p => p.PageSections)
      .HasForeignKey(ps => ps.PageId);

    modelBuilder.Entity<PageSection>()
      .HasOne(ps => ps.Section)
      .WithMany()
      .HasForeignKey(ps => ps.SectionId);
  }
}
