using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Database.Migrations
{
    /// <inheritdoc />
    public partial class NewInitialSetup : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "Bellemans");

            migrationBuilder.CreateTable(
                name: "HeaderSection",
                schema: "Bellemans",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Title = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: false),
                    PrimaryCallToAction_Url = table.Column<string>(type: "text", nullable: false),
                    PrimaryCallToAction_Text = table.Column<string>(type: "text", nullable: false),
                    SecondaryCallToAction_Url = table.Column<string>(type: "text", nullable: false),
                    SecondaryCallToAction_Text = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HeaderSection", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ImageSection",
                schema: "Bellemans",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ImageUrl = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ImageSection", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Page",
                schema: "Bellemans",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Title = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Page", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ServicesSection",
                schema: "Bellemans",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Title = table.Column<string>(type: "text", nullable: false),
                    FirstCallToActionSubSection_Title = table.Column<string>(type: "text", nullable: false),
                    FirstCallToActionSubSection_Description = table.Column<string>(type: "text", nullable: false),
                    FirstCallToActionSubSection_CallToAction_Url = table.Column<string>(type: "text", nullable: false),
                    FirstCallToActionSubSection_CallToAction_Text = table.Column<string>(type: "text", nullable: false),
                    SecondCallToActionSubSection_Title = table.Column<string>(type: "text", nullable: false),
                    SecondCallToActionSubSection_Description = table.Column<string>(type: "text", nullable: false),
                    SecondCallToActionSubSection_CallToAction_Url = table.Column<string>(type: "text", nullable: false),
                    SecondCallToActionSubSection_CallToAction_Text = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServicesSection", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "HeaderSectionPage",
                schema: "Bellemans",
                columns: table => new
                {
                    HeaderSectionsId = table.Column<Guid>(type: "uuid", nullable: false),
                    PageId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HeaderSectionPage", x => new { x.HeaderSectionsId, x.PageId });
                    table.ForeignKey(
                        name: "FK_HeaderSectionPage_HeaderSection_HeaderSectionsId",
                        column: x => x.HeaderSectionsId,
                        principalSchema: "Bellemans",
                        principalTable: "HeaderSection",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_HeaderSectionPage_Page_PageId",
                        column: x => x.PageId,
                        principalSchema: "Bellemans",
                        principalTable: "Page",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ImageSectionPage",
                schema: "Bellemans",
                columns: table => new
                {
                    ImageSectionsId = table.Column<Guid>(type: "uuid", nullable: false),
                    PageId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ImageSectionPage", x => new { x.ImageSectionsId, x.PageId });
                    table.ForeignKey(
                        name: "FK_ImageSectionPage_ImageSection_ImageSectionsId",
                        column: x => x.ImageSectionsId,
                        principalSchema: "Bellemans",
                        principalTable: "ImageSection",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ImageSectionPage_Page_PageId",
                        column: x => x.PageId,
                        principalSchema: "Bellemans",
                        principalTable: "Page",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PageSection",
                schema: "Bellemans",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    PageId = table.Column<Guid>(type: "uuid", nullable: false),
                    Order = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PageSection", x => new { x.PageId, x.Id });
                    table.ForeignKey(
                        name: "FK_PageSection_Page_PageId",
                        column: x => x.PageId,
                        principalSchema: "Bellemans",
                        principalTable: "Page",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PageServicesSection",
                schema: "Bellemans",
                columns: table => new
                {
                    PageId = table.Column<Guid>(type: "uuid", nullable: false),
                    ServicesSectionsId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PageServicesSection", x => new { x.PageId, x.ServicesSectionsId });
                    table.ForeignKey(
                        name: "FK_PageServicesSection_Page_PageId",
                        column: x => x.PageId,
                        principalSchema: "Bellemans",
                        principalTable: "Page",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PageServicesSection_ServicesSection_ServicesSectionsId",
                        column: x => x.ServicesSectionsId,
                        principalSchema: "Bellemans",
                        principalTable: "ServicesSection",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_HeaderSectionPage_PageId",
                schema: "Bellemans",
                table: "HeaderSectionPage",
                column: "PageId");

            migrationBuilder.CreateIndex(
                name: "IX_ImageSectionPage_PageId",
                schema: "Bellemans",
                table: "ImageSectionPage",
                column: "PageId");

            migrationBuilder.CreateIndex(
                name: "IX_PageServicesSection_ServicesSectionsId",
                schema: "Bellemans",
                table: "PageServicesSection",
                column: "ServicesSectionsId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "HeaderSectionPage",
                schema: "Bellemans");

            migrationBuilder.DropTable(
                name: "ImageSectionPage",
                schema: "Bellemans");

            migrationBuilder.DropTable(
                name: "PageSection",
                schema: "Bellemans");

            migrationBuilder.DropTable(
                name: "PageServicesSection",
                schema: "Bellemans");

            migrationBuilder.DropTable(
                name: "HeaderSection",
                schema: "Bellemans");

            migrationBuilder.DropTable(
                name: "ImageSection",
                schema: "Bellemans");

            migrationBuilder.DropTable(
                name: "Page",
                schema: "Bellemans");

            migrationBuilder.DropTable(
                name: "ServicesSection",
                schema: "Bellemans");
        }
    }
}
