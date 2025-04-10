using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Database.Migrations
{
    /// <inheritdoc />
    public partial class ListSection : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ListSection",
                schema: "Bellemans",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Title = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: true),
                    Style = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ListSection", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ListItem",
                schema: "Bellemans",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Title = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: true),
                    ListSectionId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ListItem", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ListItem_ListSection_ListSectionId",
                        column: x => x.ListSectionId,
                        principalSchema: "Bellemans",
                        principalTable: "ListSection",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ListSectionPage",
                schema: "Bellemans",
                columns: table => new
                {
                    ListSectionsId = table.Column<Guid>(type: "uuid", nullable: false),
                    PageId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ListSectionPage", x => new { x.ListSectionsId, x.PageId });
                    table.ForeignKey(
                        name: "FK_ListSectionPage_ListSection_ListSectionsId",
                        column: x => x.ListSectionsId,
                        principalSchema: "Bellemans",
                        principalTable: "ListSection",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ListSectionPage_Page_PageId",
                        column: x => x.PageId,
                        principalSchema: "Bellemans",
                        principalTable: "Page",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ListItem_ListSectionId",
                schema: "Bellemans",
                table: "ListItem",
                column: "ListSectionId");

            migrationBuilder.CreateIndex(
                name: "IX_ListSectionPage_PageId",
                schema: "Bellemans",
                table: "ListSectionPage",
                column: "PageId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ListItem",
                schema: "Bellemans");

            migrationBuilder.DropTable(
                name: "ListSectionPage",
                schema: "Bellemans");

            migrationBuilder.DropTable(
                name: "ListSection",
                schema: "Bellemans");
        }
    }
}
