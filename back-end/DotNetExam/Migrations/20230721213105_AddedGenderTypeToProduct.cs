using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DotNetExam.Migrations
{
    /// <inheritdoc />
    public partial class AddedGenderTypeToProduct : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "GenderTypeId",
                table: "Products",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "GenderType",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GenderType", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Products_GenderTypeId",
                table: "Products",
                column: "GenderTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_GenderType_GenderTypeId",
                table: "Products",
                column: "GenderTypeId",
                principalTable: "GenderType",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_GenderType_GenderTypeId",
                table: "Products");

            migrationBuilder.DropTable(
                name: "GenderType");

            migrationBuilder.DropIndex(
                name: "IX_Products_GenderTypeId",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "GenderTypeId",
                table: "Products");
        }
    }
}
