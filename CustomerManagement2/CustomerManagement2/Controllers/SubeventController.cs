using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CustomerManagement2.Models;
using CustomerManagement2.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CustomerManagement2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubeventController : ControllerBase
    {
        private readonly ISubevent sub;
        private readonly customermanagementContext _context;
         
        public SubeventController(ISubevent subevent, customermanagementContext context)
        {
            this.sub = subevent;
            this._context = context;
        }


        [HttpGet]
        public async Task<IActionResult> GetAllSubevents()
        {
            var ar = await sub.GetSubevents();
            if (ar != null)
            {
                return Ok(ar);
            }
            return NotFound();
        }

        [HttpGet("event/{eveid}")]
        public async Task<IActionResult> GetSubeventByEventId(int eveid)
        {
            var ar = await sub.GetByEventId(eveid);
            if (ar != null)
            {
                return Ok(ar);
            }
            return NotFound();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetSubeventById(int id)
        {
            var ar = await sub.GetById(id);
            if (ar != null)
            {
                return Ok(ar);
            }
            return NotFound();
        }

        [HttpPost]
        public async Task<IActionResult> AddSubevent(Subevent subevent)
        {
            var ar = await sub.AddSubevent(subevent);
            if (ar >0)
            {
                return Ok(ar);
            }
            return BadRequest();
        }

    }
}