﻿// <auto-generated />
using System;
using Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Database.Migrations
{
    [DbContext(typeof(BellemansDbContext))]
    [Migration("20250205173153_AddServicesSection")]
    partial class AddServicesSection
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasDefaultSchema("Bellemans")
                .HasAnnotation("ProductVersion", "9.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Domain.Page.Page", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Pages", "Bellemans");
                });

            modelBuilder.Entity("Domain.Section.HeaderSection", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("HeaderSections", "Bellemans");
                });

            modelBuilder.Entity("Domain.Section.ImageSection", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("ImageUrl")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("ImageSections", "Bellemans");
                });

            modelBuilder.Entity("Domain.Section.ServicesSection.ServicesSection", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("ServicesSections", "Bellemans");
                });

            modelBuilder.Entity("HeaderSectionPage", b =>
                {
                    b.Property<Guid>("HeaderSectionsId")
                        .HasColumnType("uuid");

                    b.Property<string>("PageId")
                        .HasColumnType("text");

                    b.HasKey("HeaderSectionsId", "PageId");

                    b.HasIndex("PageId");

                    b.ToTable("HeaderSectionPage", "Bellemans");
                });

            modelBuilder.Entity("ImageSectionPage", b =>
                {
                    b.Property<Guid>("ImageSectionsId")
                        .HasColumnType("uuid");

                    b.Property<string>("PageId")
                        .HasColumnType("text");

                    b.HasKey("ImageSectionsId", "PageId");

                    b.HasIndex("PageId");

                    b.ToTable("ImageSectionPage", "Bellemans");
                });

            modelBuilder.Entity("Domain.Page.Page", b =>
                {
                    b.OwnsMany("Domain.Page.PageSection", "PageSections", b1 =>
                        {
                            b1.Property<string>("PageId")
                                .HasColumnType("text");

                            b1.Property<Guid>("Id")
                                .ValueGeneratedOnAdd()
                                .HasColumnType("uuid");

                            b1.Property<int>("Order")
                                .HasColumnType("integer");

                            b1.HasKey("PageId", "Id");

                            b1.ToTable("PageSections", "Bellemans");

                            b1.WithOwner()
                                .HasForeignKey("PageId");
                        });

                    b.Navigation("PageSections");
                });

            modelBuilder.Entity("Domain.Section.HeaderSection", b =>
                {
                    b.OwnsOne("Domain.Components.Link", "PrimaryCallToAction", b1 =>
                        {
                            b1.Property<Guid>("HeaderSectionId")
                                .HasColumnType("uuid");

                            b1.Property<string>("Text")
                                .IsRequired()
                                .HasColumnType("text");

                            b1.Property<string>("Url")
                                .IsRequired()
                                .HasColumnType("text");

                            b1.HasKey("HeaderSectionId");

                            b1.ToTable("HeaderSections", "Bellemans");

                            b1.WithOwner()
                                .HasForeignKey("HeaderSectionId");
                        });

                    b.OwnsOne("Domain.Components.Link", "SecondaryCallToAction", b1 =>
                        {
                            b1.Property<Guid>("HeaderSectionId")
                                .HasColumnType("uuid");

                            b1.Property<string>("Text")
                                .IsRequired()
                                .HasColumnType("text");

                            b1.Property<string>("Url")
                                .IsRequired()
                                .HasColumnType("text");

                            b1.HasKey("HeaderSectionId");

                            b1.ToTable("HeaderSections", "Bellemans");

                            b1.WithOwner()
                                .HasForeignKey("HeaderSectionId");
                        });

                    b.Navigation("PrimaryCallToAction")
                        .IsRequired();

                    b.Navigation("SecondaryCallToAction")
                        .IsRequired();
                });

            modelBuilder.Entity("Domain.Section.ServicesSection.ServicesSection", b =>
                {
                    b.OwnsOne("Domain.Section.ServicesSection.CallToActionSubSection", "FirstCallToActionSubSection", b1 =>
                        {
                            b1.Property<Guid>("ServicesSectionId")
                                .HasColumnType("uuid");

                            b1.Property<string>("Description")
                                .IsRequired()
                                .HasColumnType("text");

                            b1.Property<string>("Title")
                                .IsRequired()
                                .HasColumnType("text");

                            b1.HasKey("ServicesSectionId");

                            b1.ToTable("ServicesSections", "Bellemans");

                            b1.WithOwner()
                                .HasForeignKey("ServicesSectionId");

                            b1.OwnsOne("Domain.Components.Link", "CallToAction", b2 =>
                                {
                                    b2.Property<Guid>("CallToActionSubSectionServicesSectionId")
                                        .HasColumnType("uuid");

                                    b2.Property<string>("Text")
                                        .IsRequired()
                                        .HasColumnType("text");

                                    b2.Property<string>("Url")
                                        .IsRequired()
                                        .HasColumnType("text");

                                    b2.HasKey("CallToActionSubSectionServicesSectionId");

                                    b2.ToTable("ServicesSections", "Bellemans");

                                    b2.WithOwner()
                                        .HasForeignKey("CallToActionSubSectionServicesSectionId");
                                });

                            b1.Navigation("CallToAction")
                                .IsRequired();
                        });

                    b.OwnsOne("Domain.Section.ServicesSection.CallToActionSubSection", "SecondCallToActionSubSection", b1 =>
                        {
                            b1.Property<Guid>("ServicesSectionId")
                                .HasColumnType("uuid");

                            b1.Property<string>("Description")
                                .IsRequired()
                                .HasColumnType("text");

                            b1.Property<string>("Title")
                                .IsRequired()
                                .HasColumnType("text");

                            b1.HasKey("ServicesSectionId");

                            b1.ToTable("ServicesSections", "Bellemans");

                            b1.WithOwner()
                                .HasForeignKey("ServicesSectionId");

                            b1.OwnsOne("Domain.Components.Link", "CallToAction", b2 =>
                                {
                                    b2.Property<Guid>("CallToActionSubSectionServicesSectionId")
                                        .HasColumnType("uuid");

                                    b2.Property<string>("Text")
                                        .IsRequired()
                                        .HasColumnType("text");

                                    b2.Property<string>("Url")
                                        .IsRequired()
                                        .HasColumnType("text");

                                    b2.HasKey("CallToActionSubSectionServicesSectionId");

                                    b2.ToTable("ServicesSections", "Bellemans");

                                    b2.WithOwner()
                                        .HasForeignKey("CallToActionSubSectionServicesSectionId");
                                });

                            b1.Navigation("CallToAction")
                                .IsRequired();
                        });

                    b.Navigation("FirstCallToActionSubSection")
                        .IsRequired();

                    b.Navigation("SecondCallToActionSubSection")
                        .IsRequired();
                });

            modelBuilder.Entity("HeaderSectionPage", b =>
                {
                    b.HasOne("Domain.Section.HeaderSection", null)
                        .WithMany()
                        .HasForeignKey("HeaderSectionsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Page.Page", null)
                        .WithMany()
                        .HasForeignKey("PageId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("ImageSectionPage", b =>
                {
                    b.HasOne("Domain.Section.ImageSection", null)
                        .WithMany()
                        .HasForeignKey("ImageSectionsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Page.Page", null)
                        .WithMany()
                        .HasForeignKey("PageId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
