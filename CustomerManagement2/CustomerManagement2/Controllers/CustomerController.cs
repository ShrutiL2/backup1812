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
    public class CustomerController : ControllerBase
    {
        private readonly ICustomer cust;
        private readonly customermanagementContext _context;

        public CustomerController(ICustomer customer, customermanagementContext context)
        {
            this.cust = customer;
            this._context = context;
        }

        [HttpGet]
        public async Task<IActionResult> DisplayAll()
        {
            var ar = await cust.GetAllCustomer();
            if(ar != null)
            {
                return Ok(ar);
            }
            return NotFound();
        }
        
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var ar = await cust.GetCustomerById(id);
            if(ar != null)
            {
                return Ok(ar);
            }
            return NotFound();
        }

        [HttpGet("details/{username}")]
        public async Task<IActionResult> GetDetailsByUsername( string username)
        {
            var ar = await cust.GetByUsername(username);
            if (ar != null)
            {
                return Ok(ar);
            }
            return NotFound();
        }

        [HttpGet("login/{username}/{password}")]
        
        public async Task<IActionResult> Login(string username, string password)
        {
            var res = await cust.Login(username, password);
            if (res != null)
            {
                return Ok(res);
            }
            return NotFound();
        }

        [HttpPost]
        public async Task<IActionResult> AddNewCustomer(Customer customer)
        {
            int ar = await cust.AddCustomer(customer);
            if(ar >0)
            {
                return Ok(ar);
            }
            return NotFound();
        }
    }
}