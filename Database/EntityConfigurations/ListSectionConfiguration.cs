using Domain.Section;
using Domain.Section.ListSection;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Database.EntityConfigurations;

public class ListSectionConfiguration : IEntityTypeConfiguration<ListSection>
{
    public void Configure(EntityTypeBuilder<ListSection> builder)
    {
        builder.ToTable("ListSection");
        
        builder.HasKey(ls => ls.Id);
        builder.Property(ls => ls.Id).ValueGeneratedNever();
        
        builder.Property(ls => ls.Title);
        builder.Property(ls => ls.Description)
            .IsRequired(false);
        
        builder.Property(ls => ls.Style)
            .HasConversion(
                p => p.Value,
                p => ListStyle.FromValue(p));;

        builder.OwnsMany(ls => ls.Items, ib =>
        {
            ib.ToTable("ListItem");
            ib.WithOwner()
                .HasForeignKey("ListSectionId");
            
            ib.HasKey(e => e.Id);
            ib.Property(e => e.Id).ValueGeneratedNever();
            
            ib.Property(e => e.Title);
            ib.Property(e => e.Description)
                .IsRequired(false);
        });
    }
}