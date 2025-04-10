using Domain.Section;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Database.EntityConfigurations;

public class ImageSectionConfiguration : IEntityTypeConfiguration<ImageSection>
{
    public void Configure(EntityTypeBuilder<ImageSection> builder)
    {
        builder.ToTable("ImageSection");
        
        builder.HasKey(e => e.Id);
        builder.Property(e => e.Id).ValueGeneratedNever();
        
        builder.Property(e => e.ImageUrl);
    }
}