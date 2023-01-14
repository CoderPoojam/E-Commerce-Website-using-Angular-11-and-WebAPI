using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BuyClothStore.Models
{
    public class Cloth
    {
        [Key]
        public int CId { get; set; }
        public string CName { get; set; }
        public string CFabric { get; set; }
        public string CSize { get; set; }
        public string CPrice { get; set; }
        public string ImageUrl { get; set; }
    }
}
