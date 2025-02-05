using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Database.Migrations
{
    /// <inheritdoc />
    public partial class AddMissingManyToManyServicesSection : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PageServicesSection",
                schema: "Bellemans",
                columns: table => new
                {
                    PageId = table.Column<string>(type: "text", nullable: false),
                    ServicesSectionsId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PageServicesSection", x => new { x.PageId, x.ServicesSectionsId });
                    table.ForeignKey(
                        name: "FK_PageServicesSection_Pages_PageId",
                        column: x => x.PageId,
                        principalSchema: "Bellemans",
                        principalTable: "Pages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PageServicesSection_ServicesSections_ServicesSectionsId",
                        column: x => x.ServicesSectionsId,
                        principalSchema: "Bellemans",
                        principalTable: "ServicesSections",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

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
                name: "PageServicesSection",
                schema: "Bellemans");
        }
    }
}
