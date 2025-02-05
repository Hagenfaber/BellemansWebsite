using Domain.Page;
using Domain.Section;
using Domain.Section.ServicesSection;
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
    modelBuilder.Entity<ServicesSection>().ToTable("ServicesSections");
    modelBuilder.Entity<Page>().ToTable("Pages");
    
    modelBuilder.Entity<ImageSection>()
      .HasKey(p => p.Id);
    
    modelBuilder.Entity<HeaderSection>()
      .HasKey(p => p.Id);
    
    modelBuilder.Entity<ServicesSection>()
      .HasKey(p => p.Id);

    modelBuilder.Entity<HeaderSection>()
      .OwnsOne(h => h.PrimaryCallToAction, cb =>
      {
        cb.WithOwner();
      });

    modelBuilder.Entity<HeaderSection>()
      .OwnsOne(h => h.SecondaryCallToAction, cb =>
      {
        cb.WithOwner();
      });
    
    modelBuilder.Entity<ServicesSection>()
      .OwnsOne(h => h.FirstCallToActionSubSection, cb =>
      {
        cb.OwnsOne(ctass => ctass.CallToAction);
        cb.WithOwner();
      });
    
    modelBuilder.Entity<ServicesSection>()
      .OwnsOne(h => h.SecondCallToActionSubSection, cb =>
      {
        cb.OwnsOne(ctass => ctass.CallToAction);
        cb.WithOwner();
      });

    modelBuilder.Entity<Page>()
      .HasMany(p => p.ImageSections)
      .WithMany();
    
    modelBuilder.Entity<Page>()
      .HasMany(p => p.HeaderSections)
      .WithMany();
    
    modelBuilder.Entity<Page>()
      .HasMany(p => p.ServicesSections)
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
