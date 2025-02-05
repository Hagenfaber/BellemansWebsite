using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Database.Migrations
{
    /// <inheritdoc />
    public partial class AddServicesSection : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ServicesSections",
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
                    table.PrimaryKey("PK_ServicesSections", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ServicesSections",
                schema: "Bellemans");
        }
    }
}
