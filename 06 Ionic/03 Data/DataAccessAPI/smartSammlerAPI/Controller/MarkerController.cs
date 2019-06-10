using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

namespace smartSammlerAPI
{
    [Route("api/markers")]
    public class MarkerController : Microsoft.AspNetCore.Mvc.Controller
    {
        private IHubContext<MarkerHub> markerHub;
        private SammlerDBContext ctx;

        public MarkerController(IHubContext<MarkerHub> hub, SammlerDBContext dbctx)
        {
            markerHub = hub;
            ctx = dbctx;
        }

        [HttpGet]
        public Marker[] Get()
        {
            return ctx.Markers.ToArray();
        }
        
        [HttpGet("{id}")]
        public Marker GetById(int ID)
        {
            return ctx.Markers.FirstOrDefault(m=>m.id == ID);
        }

        [HttpPost]       
        public IActionResult Insert([FromBody]Marker m)
        {
            ctx.Markers.Add(m);
            ctx.SaveChanges();
            return Ok();
        }


        [HttpPut]       
        public IActionResult Update([FromBody]Marker m)
        {
            ctx.Markers.Attach(m);
            ctx.Entry(m).State = EntityState.Modified;
            return Ok();
        }

        // Custom Routes
        
        // http://localhost:PORT/api/markers/customroute 
        [HttpGet]
        [Route("customroute")]
        public IEnumerable<Marker> CustomRoute()
        {
            return Get();
        }

        // Task Pattern

        // Get implemented using Task Pattern - should be default
        // http://localhost:PORT/api/markers/asyncArray        
        [HttpGet]
        [Route("asyncArray")]
        [ProducesResponseType(typeof(Marker[]), 200)]
        [ProducesResponseType(typeof(ApiResponse), 400)]
        public async Task<ActionResult> GetResponse()
        {
            try
            {
                var markers = await ctx.Markers.OrderByDescending(v => v.lable).ToArrayAsync();
                return Ok(markers);
            }
            catch (Exception exp)
            {
                return BadRequest(new ApiResponse { Status = false, Data = exp.InnerException.Message });
            }
        }

        
        // Signal R

        [HttpGet]
        [Route("signalrinit")]
        public IActionResult Init()
        {
            BroadcastMarkers();
            return Ok();
        }

        //Sample payload for POST
        //{
        //  "imgURL": "/assets/images/schnitzelbaum.png",
        //  "lable": "Schnitzelbaum",
        //  "type": 1,
        //  "lat": 48.5839237,
        //  "lng": 15.4276355,
        //  "remark": "Welcome to Schlaraffenland"
        //}
        [HttpPost]
        [Route("signalrsave")]
        public IActionResult Post([FromBody]Marker m)
        {
            if (m.id == 0)
            {
                ctx.Markers.Add(m);
            }
            else
            {
                ctx.Markers.Attach(m);
                ctx.Entry(m).State = EntityState.Modified;
            }

            ctx.SaveChanges();
            BroadcastMarkers();
            return Ok();
        }

        [HttpDelete("{id}")]
        [Route("signalrdelete")]
        public IActionResult Delete(int id)
        {
            var v = ctx.Markers.FirstOrDefault(m => m.id == id);
            if (v != null)
            {
                ctx.Remove(v);
                ctx.SaveChanges();
            }
            BroadcastMarkers();
            return Ok();
        }

        private void BroadcastMarkers()
        {
            Marker[] markers = this.ctx.Markers.ToArray();
            markerHub.Clients.All.SendAsync("broadcastMarkers", markers);
        }
    }
}
