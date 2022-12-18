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
    public class EventController : ControllerBase
    {
        private readonly IEvent eve;
        private readonly customermanagementContext _context;

        public EventController(IEvent ievent, customermanagementContext context)
        {
            this.eve = ievent;
            this._context = context;
        }

        [HttpGet]
        public async Task<IActionResult> DisplayAllEvents()
        {
            var ar = await eve.GetAllEvent();
            if(ar != null)
            {
                return Ok(ar);
            }
            return NotFound();
        }

        [HttpGet("id/{id}")]
        public async Task<IActionResult> GetEventbyId(int id)
        {
            var ar = await eve.GetById(id);
            if(ar != null)
            {
                return Ok(ar);
            }
            return NotFound();
        }

        [HttpGet("{eventname}")]
        public async Task<IActionResult> GetEventbyName(string name)
        {
            var ar = await eve.GetByName(name);
            if (ar != null)
            {
                return Ok(ar);
            }
            return NotFound();
        }

        [HttpPost]
        public async Task<IActionResult> AddEvent(Eventdetails eventdetails)
        {
            int ar = await eve.AddEvent(eventdetails);
            if(ar> 0)
            {
                return Ok(eventdetails);
            }
            return NotFound();
        }

    }
}