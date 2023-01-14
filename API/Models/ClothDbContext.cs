using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BuyClothStore.Models
{
    public class ClothDbContext:DbContext
    {
        public ClothDbContext(DbContextOptions<ClothDbContext> options) : base(options)
        {

        }
        public DbSet<Cloth> cloths { get; set; }

    }
}
