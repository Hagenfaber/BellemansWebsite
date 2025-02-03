using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Database.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "Bellemans");

            migrationBuilder.CreateTable(
                name: "HeaderSections",
                schema: "Bellemans",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Title = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HeaderSections", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ImageSections",
                schema: "Bellemans",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ImageUrl = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ImageSections", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Pages",
                schema: "Bellemans",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    Title = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pages", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "HeaderSectionPage",
                schema: "Bellemans",
                columns: table => new
                {
                    HeaderSectionsId = table.Column<Guid>(type: "uuid", nullable: false),
                    PageId = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HeaderSectionPage", x => new { x.HeaderSectionsId, x.PageId });
                    table.ForeignKey(
                        name: "FK_HeaderSectionPage_HeaderSections_HeaderSectionsId",
                        column: x => x.HeaderSectionsId,
                        principalSchema: "Bellemans",
                        principalTable: "HeaderSections",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_HeaderSectionPage_Pages_PageId",
                        column: x => x.PageId,
                        principalSchema: "Bellemans",
                        principalTable: "Pages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ImageSectionPage",
                schema: "Bellemans",
                columns: table => new
                {
                    ImageSectionsId = table.Column<Guid>(type: "uuid", nullable: false),
                    PageId = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ImageSectionPage", x => new { x.ImageSectionsId, x.PageId });
                    table.ForeignKey(
                        name: "FK_ImageSectionPage_ImageSections_ImageSectionsId",
                        column: x => x.ImageSectionsId,
                        principalSchema: "Bellemans",
                        principalTable: "ImageSections",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ImageSectionPage_Pages_PageId",
                        column: x => x.PageId,
                        principalSchema: "Bellemans",
                        principalTable: "Pages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PageSections",
                schema: "Bellemans",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    PageId = table.Column<string>(type: "text", nullable: false),
                    Order = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PageSections", x => new { x.PageId, x.Id });
                    table.ForeignKey(
                        name: "FK_PageSections_Pages_PageId",
                        column: x => x.PageId,
                        principalSchema: "Bellemans",
                        principalTable: "Pages",
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
                name: "PageSections",
                schema: "Bellemans");

            migrationBuilder.DropTable(
                name: "HeaderSections",
                schema: "Bellemans");

            migrationBuilder.DropTable(
                name: "ImageSections",
                schema: "Bellemans");

            migrationBuilder.DropTable(
                name: "Pages",
                schema: "Bellemans");
        }
    }
}
