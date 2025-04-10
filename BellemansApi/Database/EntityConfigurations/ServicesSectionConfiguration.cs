using Domain.Section;
using Domain.Section.ServicesSection;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Database.EntityConfigurations;

public class ServicesSectionConfiguration : IEntityTypeConfiguration<ServicesSection>
{
    public void Configure(EntityTypeBuilder<ServicesSection> builder)
    {
        builder.ToTable("ServicesSection");
        
        builder.HasKey(e => e.Id);
        builder.Property(e => e.Id).ValueGeneratedNever();
        
        builder.Property(e => e.Title);
        
        builder.OwnsOne(h => h.FirstCallToActionSubSection, cb =>
        {
            cb.WithOwner();
            cb.Property(l => l.Title);
            cb.Property(l => l.Description);
            cb.OwnsOne(ctass => ctass.CallToAction);
        });
        
        builder.OwnsOne(h => h.SecondCallToActionSubSection, cb =>
        {
            cb.WithOwner();
            cb.Property(l => l.Title);
            cb.Property(l => l.Description);
            cb.OwnsOne(ctass => ctass.CallToAction, lb =>
            {
                lb.WithOwner();
                lb.Property(l => l.Url);
                lb.Property(l => l.Text);
            });
        });
    }
}