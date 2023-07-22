using DotNetExam.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DotNetExam
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
        public DbSet<ProductType> ProductType { get; set; }
        public DbSet<GenderType> GenderTypes { get; set; }
        public DbSet<Product> Products { get; set; }
    }
}
