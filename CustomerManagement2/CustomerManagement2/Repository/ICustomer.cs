using CustomerManagement2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerManagement2.Repository
{
    public interface ICustomer
    {
        Task<Customer> Login(string username, string password);

        Task<List<Customer>> GetAllCustomer();

        Task<Customer> GetCustomerById(int id);

        Task<Customer> GetByUsername(string username);

        Task<int> AddCustomer(Customer customer);
    }
}
