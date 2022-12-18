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
    public class DependancyController : ControllerBase
    {
        private readonly IDependancy dept;
        private readonly customermanagementContext _context;

        public DependancyController(IDependancy dependancy, customermanagementContext context)
        {
            this.dept = dependancy;
            this._context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllDependencies()
        {
            var ar = await dept.GetDependancies();
            if (ar != null)
            {
                return Ok(ar);
            }
            return NotFound();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetDependencyById(int id)
        {
            var ar = await dept.GetById(id);
            if (ar != null)
            {
                return Ok(ar);
            }
            return NotFound();
        }

        [HttpGet("customer/{id}")]
        public async Task<IActionResult> GetDependencyByCustId(int id)
        {
            var ar = await dept.GetByCustId(id);
            if (ar != null)
            {
                return Ok(ar);
            }
            return NotFound();
        }

        [HttpPost]
        public async Task<IActionResult> AddNewDependency(Dependancy dependancy)
        {
            var ar = await dept.AddNew(dependancy);
            if(ar >0)
            {
                return Ok(ar);
            }
            return BadRequest();
        }

        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteDependancy(int id)
        {
            var ar = await dept.DeleteDependancy(id);
            if (ar !=null)
            {
                return Ok(ar);
            }
            return BadRequest();
        }
    }
}