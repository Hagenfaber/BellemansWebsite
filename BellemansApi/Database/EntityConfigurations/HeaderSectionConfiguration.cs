using Domain.Section;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Database.EntityConfigurations;

public class HeaderSectionConfiguration : IEntityTypeConfiguration<HeaderSection>
{
    public void Configure(EntityTypeBuilder<HeaderSection> builder)
    {
        builder.ToTable("HeaderSection");
        
        builder.HasKey(e => e.Id);
        builder.Property(e => e.Id).ValueGeneratedNever();
        
        builder.Property(e => e.Title);
        builder.Property(e => e.Description);

        builder.OwnsOne(h => h.PrimaryCallToAction, lb =>
        {
            lb.WithOwner();
            lb.Property(l => l.Url);
            lb.Property(l => l.Text);
        });
        
        builder.OwnsOne(h => h.SecondaryCallToAction, lb =>
        {
            lb.WithOwner();
            lb.Property(l => l.Url);
            lb.Property(l => l.Text);
        });
    }
}