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
    modelBuilder.Entity<ImageSection>().ToTable("ImageSections");
    modelBuilder.Entity<Page>().ToTable("Pages");
    
    modelBuilder.Entity<ImageSection>()
      .HasKey(p => p.Id);
    
    modelBuilder.Entity<HeaderSection>()
      .HasKey(p => p.Id);

    modelBuilder.Entity<Page>()
      .HasMany(p => p.ImageSections)
      .WithMany();
    
    modelBuilder.Entity<Page>()
      .HasMany(p => p.HeaderSections)
      .WithMany();

    modelBuilder.Entity<Page>()
      .OwnsMany(p => p.PageSections, psb =>
      {
        psb.ToTable("PageSections");
        psb
          .WithOwner()
          .HasForeignKey("PageId");
        psb.HasKey("PageId", "Id");
      });
  }
}
