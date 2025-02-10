using Domain.Page;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Database.EntityConfigurations;

public class PageConfiguration : IEntityTypeConfiguration<Page>
{

    public void Configure(EntityTypeBuilder<Page> builder)
    {
        builder.ToTable("Page");

        builder.HasKey(e => e.Id);
        builder.Property(e => e.Id).ValueGeneratedNever();

        builder.Property(e => e.Title);

        builder.HasMany(p => p.ImageSections)
            .WithMany();

        builder.HasMany(p => p.HeaderSections)
            .WithMany();
        
        builder.HasMany(p => p.ServicesSections)
            .WithMany();
        
        builder.OwnsMany(p => p.PageSections, psb =>
        {
            psb.ToTable("PageSection");
            psb.WithOwner()
                .HasForeignKey("PageId");
            
            psb.HasKey(e => e.Id);
            psb.Property(e => e.Id).ValueGeneratedNever();
            
            psb.Property(e => e.Order);
            
            psb.HasKey("PageId", "Id");
        });
    }
}