using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Database.Migrations
{
    /// <inheritdoc />
    public partial class AddCallToActionsToHeaderSection : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PrimaryCallToAction_Text",
                schema: "Bellemans",
                table: "HeaderSections",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PrimaryCallToAction_Url",
                schema: "Bellemans",
                table: "HeaderSections",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "SecondaryCallToAction_Text",
                schema: "Bellemans",
                table: "HeaderSections",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "SecondaryCallToAction_Url",
                schema: "Bellemans",
                table: "HeaderSections",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PrimaryCallToAction_Text",
                schema: "Bellemans",
                table: "HeaderSections");

            migrationBuilder.DropColumn(
                name: "PrimaryCallToAction_Url",
                schema: "Bellemans",
                table: "HeaderSections");

            migrationBuilder.DropColumn(
                name: "SecondaryCallToAction_Text",
                schema: "Bellemans",
                table: "HeaderSections");

            migrationBuilder.DropColumn(
                name: "SecondaryCallToAction_Url",
                schema: "Bellemans",
                table: "HeaderSections");
        }
    }
}
