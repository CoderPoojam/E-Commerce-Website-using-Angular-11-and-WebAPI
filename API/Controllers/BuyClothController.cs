using BuyClothStore.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BuyClothStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuyClothController : ControllerBase
    {
        private readonly ClothDbContext context;

        public BuyClothController(ClothDbContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public async Task<IEnumerable<Cloth>> Get()
        {
            return await context.cloths.ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id)
        {
            var emp = await context.cloths.FindAsync(id);
            if (emp == null)
                return NotFound("ID Not Found");
            return Ok(emp);
        }

        [HttpPost]
        public async Task<Cloth> Post([FromBody] Cloth clt)
        {
            context.cloths.Add(clt);
            await context.SaveChangesAsync();
            return clt;
        }
        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, [FromBody] Cloth clt)
        {
            if (id != clt.CId)
                return BadRequest($"id {id} does not match with EID {clt.CId}");
            var res = await context.cloths.FindAsync(id);
            if (res == null)
                return NotFound("ID Not Found");

            //context.Emps.Update(emp);
            res.CName = clt.CName;
            res.CFabric = clt.CFabric;
            res.CSize = clt.CSize;
            res.CPrice = clt.CPrice;
            res.ImageUrl = clt.ImageUrl;

            await context.SaveChangesAsync();
            return Ok();
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var emp = await context.cloths.FindAsync(id);
            if (emp == null)
                return NotFound();
            context.cloths.Remove(emp);
            await context.SaveChangesAsync();
            return Ok();
        }



    }
}
