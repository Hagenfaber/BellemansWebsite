using Domain.Page;
using Domain.Section;
using Domain.Section.ServicesSection;

namespace Api.Controllers.Pages.Shared;

public struct PageResponse
{
    public required string Name { get; set; }
    public required string Title { get; set; }
    public required ICollection<MappedHeaderSection> HeaderSections { get; set; }
    public required ICollection<MappedImageSection> ImageSections { get; set; }
    public required ICollection<MappedServicesSection> ServicesSections { get; set; }
    
    public static PageResponse Map(Page page)
    {
        var mappedPage = MapPage(page);

        return new PageResponse
        {
            Name = mappedPage.Name,
            Title = mappedPage.Title,
            HeaderSections = mappedPage.HeaderSections,
            ImageSections = mappedPage.ImageSections,
            ServicesSections = mappedPage.ServicesSections
        };
    }

    public static MappedPage MapPage(Page page)
    {
        var pageSections = page.PageSections.Select(MapPageSection).ToList();
        return new MappedPage
        {
            Name = page.Id,
            Title = page.Title,
            PageSections = pageSections,
            HeaderSections = page.HeaderSections.Select(hs => MapHeaderSection(hs, pageSections)).ToList(),
            ImageSections = page.ImageSections.Select(imageSection => MapImageSection(imageSection, pageSections)).ToList(),
            ServicesSections = page.ServicesSections.Select(servicesSection => MapServicesSection(servicesSection, pageSections)).ToList()
        };
    }

    public static MappedPageSection MapPageSection(PageSection pageSection)
    {
        return new MappedPageSection
        {
            Id = pageSection.Id,
            Order = pageSection.Order,
        };
    }
    
    public static MappedHeaderSection MapHeaderSection(HeaderSection headerSection, List<MappedPageSection> pageSections)
    {
        return new MappedHeaderSection
        {
            Id = headerSection.Id,
            Order = pageSections.FirstOrDefault(ps => ps.Id == headerSection.Id)!.Order,
            Title = headerSection.Title,
            Description = headerSection.Description,
            PrimaryCallToAction = new MappedCallToAction { Text = headerSection.PrimaryCallToAction.Text, Url = headerSection.PrimaryCallToAction.Url },
            SecondaryCallToAction = new MappedCallToAction { Text = headerSection.SecondaryCallToAction.Text, Url = headerSection.SecondaryCallToAction.Url },
        };
    }
    
    public static MappedImageSection MapImageSection(ImageSection imageSection, List<MappedPageSection> pageSections)
    {
        return new MappedImageSection
        {
            Id = imageSection.Id,
            Order = pageSections.FirstOrDefault(ps => ps.Id == imageSection.Id)!.Order,
            ImageUrl = imageSection.ImageUrl,
        };
    }
    
    public static MappedServicesSection MapServicesSection(ServicesSection servicesSection, List<MappedPageSection> pageSections)
    {
        return new MappedServicesSection
        {
            Id = servicesSection.Id,
            Order = pageSections.FirstOrDefault(ps => ps.Id == servicesSection.Id)!.Order,
            Title = servicesSection.Title,
            FirstCallToActionSubSection = new MappedCallToActionSubSection
            {
                Title = servicesSection.FirstCallToActionSubSection.Title,
                Description = servicesSection.FirstCallToActionSubSection.Description,
                CallToAction = new MappedCallToAction
                {
                    Text = servicesSection.FirstCallToActionSubSection.CallToAction.Text,
                    Url = servicesSection.FirstCallToActionSubSection.CallToAction.Url
                }
            },
            SecondCallToActionSubSection = new MappedCallToActionSubSection
            {
                Title = servicesSection.SecondCallToActionSubSection.Title,
                Description = servicesSection.SecondCallToActionSubSection.Description,
                CallToAction = new MappedCallToAction
                {
                    Text = servicesSection.SecondCallToActionSubSection.CallToAction.Text,
                    Url = servicesSection.SecondCallToActionSubSection.CallToAction.Url
                }
            },
        };
    }

}