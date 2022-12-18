using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CustomerManagement2.Models;
using Microsoft.EntityFrameworkCore;

namespace CustomerManagement2.Repository
{
    public class CustomerRepo : ICustomer
    {
        private readonly customermanagementContext _context;

        public CustomerRepo(customermanagementContext context)
        {
            this._context = context;
        }

        public async Task<int> AddCustomer(Customer customer)
        {
            _context.Customer.Add(customer);
            int res = await _context.SaveChangesAsync(); 
            if(res> 0){
                return 1;
            }
            return 0;
            //throw new NotImplementedException();
        }

        public async Task<List<Customer>> GetAllCustomer()
        {
            var arr = _context.Customer.ToListAsync();
            return await arr;
            //throw new NotImplementedException();
        }

        public async Task<Customer> GetByUsername(string username)
        {
            var ar = _context.Customer.Where(x => x.Username == username).FirstOrDefaultAsync();
            if(ar != null)
            {
                return await ar;
            }
            return null;
           // throw new NotImplementedException();
        }

        public async Task<Customer> GetCustomerById(int id)
        {
            var ar = _context.Customer.Where(x => x.Custid == id).FirstOrDefaultAsync();
            if( ar != null)
            {
                return await ar;
            }
            return null;
            //throw new NotImplementedException();
        }

        public async Task<Customer> Login(string username, string password)
        {
            var ar = await _context.Customer.Where(x => x.Username == username && x.Password == password).FirstOrDefaultAsync();
            if (ar != null)
            {
                return ar;
            }
            return null;
        }
    }
}
