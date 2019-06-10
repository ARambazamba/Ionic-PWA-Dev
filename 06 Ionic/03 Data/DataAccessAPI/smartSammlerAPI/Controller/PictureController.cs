using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace smartSammlerAPI.Controller
{
    [Route("api/[controller]")]
    public class PicturesController : Microsoft.AspNetCore.Mvc.Controller
    {
        private SammlerDBContext ctx;

        public PicturesController(SammlerDBContext dbctx)
        {
            ctx = dbctx;
        }

        [HttpGet]
        public IEnumerable<Picture> Get()
        {
            return ctx.Pictures;
        }

        [HttpGet("{id}")]
        public Picture Get(int id)
        {
            return ctx.Pictures.FirstOrDefault(p => p.id == id);
        }

        [HttpPost]
        public IActionResult Post([FromBody]Picture value)
        {
            ctx.Pictures.Add(value);
            ctx.SaveChanges();
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var v = ctx.Pictures.FirstOrDefault(p => p.id == id);
            if (v != null)
            {
                ctx.Remove(v);
                ctx.SaveChanges();
            }
            return Ok();
        }

    }
}
