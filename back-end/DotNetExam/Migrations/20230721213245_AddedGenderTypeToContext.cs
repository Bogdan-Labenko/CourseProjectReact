using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DotNetExam.Migrations
{
    /// <inheritdoc />
    public partial class AddedGenderTypeToContext : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_GenderType_GenderTypeId",
                table: "Products");

            migrationBuilder.DropPrimaryKey(
                name: "PK_GenderType",
                table: "GenderType");

            migrationBuilder.RenameTable(
                name: "GenderType",
                newName: "GenderTypes");

            migrationBuilder.AddPrimaryKey(
                name: "PK_GenderTypes",
                table: "GenderTypes",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_GenderTypes_GenderTypeId",
                table: "Products",
                column: "GenderTypeId",
                principalTable: "GenderTypes",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_GenderTypes_GenderTypeId",
                table: "Products");

            migrationBuilder.DropPrimaryKey(
                name: "PK_GenderTypes",
                table: "GenderTypes");

            migrationBuilder.RenameTable(
                name: "GenderTypes",
                newName: "GenderType");

            migrationBuilder.AddPrimaryKey(
                name: "PK_GenderType",
                table: "GenderType",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_GenderType_GenderTypeId",
                table: "Products",
                column: "GenderTypeId",
                principalTable: "GenderType",
                principalColumn: "Id");
        }
    }
}
